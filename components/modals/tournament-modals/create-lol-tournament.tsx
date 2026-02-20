import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Select, SelectItem } from "@heroui/select";
import { useEffect, useState } from "react";
import { Step, Stepper } from "@material-tailwind/react";
import { Input } from "@heroui/input";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import { RadioGroup } from "@heroui/radio";
import { DatePicker } from "@heroui/date-picker";
import {
  getLocalTimeZone,
  now,
  type ZonedDateTime,
} from "@internationalized/date";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";

import type { CreateTournamentModalProps } from "../create-tournament-modal";
import { CustomRadio } from "../plans-modal";

import SelectSpaceModal from "./select-space-modal";

import { regions, teams } from "@/data";
import { TournamentCreateSchema } from "@/lib/validations";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { getUserManagedSpaces } from "@/components/managed-spaces";
import type { Space } from "@/lib/redux/api/space-api";
import { apiRequest } from "@/lib/utils/api-request";

type TournamentCreateForm = z.infer<typeof TournamentCreateSchema>;

const CreateLolTournament = ({
  isOpen,
  onOpenChange,
  gameId,
}: CreateTournamentModalProps) => {
  // const [selectedRegion, setSelectedRegion] = useState<Selection | string>("");
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDateTime, setSelectedDateTime] =
    useState<ZonedDateTime | null>(now(getLocalTimeZone()));
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [selectTeams, setSelectTeams] = useState("1");
  const {
    isOpen: selectSpaceOpen,
    onOpen: onOpenSelectSpace,
    onOpenChange: onOpenChangeSelectSpace,
  } = useDisclosure();

  const { userManagedSpaces, isLoading } = useAppSelector(
    (state) => state.space
  );

  const { token } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<TournamentCreateForm>({
    resolver: zodResolver(TournamentCreateSchema),
    defaultValues: {
      tournamentName: "",
      gameRegion: "",
      teams: "1",
      tournamentDate: now(getLocalTimeZone()),
    },
  });

  const handleNext = async () => {
    let isValid = false;

    switch (activeStep) {
      case 0:
        isValid = await trigger(["tournamentName", "gameRegion"]);
        break;
      case 1:
        setValue("teams", selectTeams);
        isValid = await trigger("teams");
        break;
      case 2:
        if (selectedDateTime) {
          setValue("tournamentDate", selectedDateTime);
          isValid = await trigger("tournamentDate");
        }
        break;
    }

    if (isValid) {
      if (isLastStep) {
        handleSubmit(onSubmit)();
      } else {
        setActiveStep((cur) => cur + 1);
      }
    }
  };

  const handleBack = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  useEffect(() => {
    if (token) {
      getUserManagedSpaces(token, dispatch);
    }
  }, [token]);

  useEffect(() => {
    if (userManagedSpaces?.length && !selectedSpace) {
      setSelectedSpace(userManagedSpaces[0]);
    }
  }, [userManagedSpaces]);

  const handleSelectSpace = (space: Space) => {
    setSelectedSpace(space);
  };

  const onSubmit = async (values: TournamentCreateForm) => {
    setIsSubmitting(true);
    try {
      if (!gameId) {
        toast.error("No Game Found");
        return;
      }
      await apiRequest("/tournaments", "POST", token, {
        name: values.tournamentName,
        playersCount: parseInt(values.teams),
        tournamentTime: selectedDateTime?.toDate().toISOString(),
        spaceId: selectedSpace?.id,
        gameId: gameId,
      });
      toast.success("Tournament Created");
      onOpenChange();
      revalidatePath("/user/tournaments");
    } catch (error) {
    } finally {
      setIsSubmitting(true);
    }
  };

  const handleDateTimeChange = (dateTime: ZonedDateTime | null) => {
    if (dateTime) {
      setSelectedDateTime(dateTime);
    } else {
      // Handle case where user clears the date
      setSelectedDateTime(null);
    }
  };

  const renderStepContent = () => {
    if (!selectedSpace) return <h2>User Has No Managed Spaces</h2>;

    const props = {
      onNext: handleNext,
      onBack: handleBack,
      isFirstStep,
      isLastStep,
    };

    switch (activeStep) {
      case 0:
        return (
          <div className="flex flex-col gap-3">
            <Input
              variant="faded"
              {...register("tournamentName")}
              errorMessage={errors.tournamentName?.message}
              isInvalid={!!errors.tournamentName?.message}
              label="Tournament name"
              labelPlacement="outside"
              placeholder="Tournament name"
              size="lg"
            />

            <Select
              variant="faded"
              {...register("gameRegion")}
              label="Region"
              labelPlacement="outside"
              placeholder="Select Region"
              size="lg"
              // value={`${selectedRegion}`}
              // @ts-ignore
              // onSelectionChange={setSelectedRegion}
            >
              {regions.map((region) => (
                <SelectItem
                  key={region.key}
                  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                  {...({ value: region.key } as any)}
                >
                  {region.label}
                </SelectItem>
              ))}
            </Select>
            <h2 className="text-white">Hosted By</h2>
            <Card>
              <CardBody className="flex-row justify-between items-center">
                <div className="flex items-center  gap-2">
                  <Image
                    radius="full"
                    src={`${selectedSpace?.imageData}`}
                    width={60}
                  />
                  <h2>{selectedSpace?.name}</h2>
                </div>
                <Button radius="full" size="sm" onPress={onOpenSelectSpace}>
                  Edit
                </Button>
              </CardBody>
            </Card>
          </div>
        );
      case 1:
        return (
          <RadioGroup
            defaultValue="1"
            description="Choose how many players can be in each team."
            label="Players per team"
            value={selectTeams}
            onValueChange={setSelectTeams}
          >
            {teams.map((team) => (
              <CustomRadio key={team.key} value={team.key}>
                {team.name}
              </CustomRadio>
            ))}
          </RadioGroup>
        );
      case 2:
        return (
          <div className="w-full max-w-xl flex flex-row gap-4">
            <DatePicker
              hideTimeZone
              showMonthAndYearPickers
              defaultValue={selectedDateTime}
              description="Pick a date and time for your tournament."
              label="Date and time"
              labelPlacement="outside"
              value={selectedDateTime}
              variant="bordered"
              onChange={handleDateTimeChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const isNextButtonDisabled = () => {
    switch (activeStep) {
      case 0:
        return !!errors.gameRegion && !!errors.tournamentName;
      case 1:
        return !selectTeams;
      case 2:
        return !selectedDateTime;
      default:
        return false;
    }
  };

  return (
    <>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-transparent text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isDismissable={false}
        isOpen={isOpen}
        radius="lg"
        size="2xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <div className="relative">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                  backgroundImage: "url(/assets/images/lolt1.jpeg)",
                  // filter: "blur(1px)",
                }}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(27, 23, 38, 1), rgba(24, 11, 58, 0.6))",
                }}
              />
              <ModalBody className="relative z-20 p-8">
                <h2 className="text-3xl mt-20 text-center font-bold text-white ">
                  Create Tournament
                </h2>

                {
                  // @ts-ignore
                  <Stepper
                    activeStep={activeStep}
                    isFirstStep={(value) => setIsFirstStep(value)}
                    isLastStep={(value) => setIsLastStep(value)}
                  >
                    {
                      // @ts-ignore
                      <Step
                        activeClassName="ring-0 !bg-white text-white"
                        className="h-8 w-8 !bg-blue-gray-50 text-white/75 "
                        completedClassName="!bg-white text-white"
                      >
                        <div className="absolute -bottom-[1.3rem] w-max text-center text-xs">
                          General
                        </div>
                      </Step>
                    }
                    {
                      // @ts-ignore
                      <Step
                        activeClassName="ring-0 !bg-white text-white"
                        className="h-8 w-8 !bg-blue-gray-50 text-white/75 "
                        completedClassName="!bg-white text-white"
                      >
                        <div className="absolute -bottom-[1.3rem] w-max text-center text-xs">
                          Teams
                        </div>
                      </Step>
                    }
                    {
                      // @ts-ignore
                      <Step
                        activeClassName="ring-0 !bg-white text-white"
                        className="h-8 w-8 !bg-blue-gray-50 text-white/75 "
                        completedClassName="!bg-white text-white"
                      >
                        <div className="absolute -bottom-[1.3rem] w-max text-center text-xs">
                          Date
                        </div>
                      </Step>
                    }
                  </Stepper>
                }

                <div className="mt-10">{renderStepContent()}</div>

                {/* <Button className="w-full" color="primary">
                Add Summoner
              </Button> */}
              </ModalBody>
              {
                <ModalFooter className="relative z-20">
                  {activeStep === 0 ? (
                    <Button color="danger" radius="full" onClick={onClose}>
                      Close
                    </Button>
                  ) : (
                    <Button color="danger" radius="full" onClick={handleBack}>
                      Back
                    </Button>
                  )}

                  <Button
                    isDisabled={isNextButtonDisabled()}
                    isLoading={isLoading}
                    radius="full"
                    onPress={() => {
                      handleNext();
                    }}
                  >
                    {isLastStep ? "Create" : "Next"}
                  </Button>
                </ModalFooter>
              }
            </div>
          )}
        </ModalContent>
      </Modal>
      <SelectSpaceModal
        isOpen={selectSpaceOpen}
        spaces={userManagedSpaces}
        onOpenChange={onOpenChangeSelectSpace}
        onSpaceSelect={handleSelectSpace}
      />
    </>
  );
};

export default CreateLolTournament;

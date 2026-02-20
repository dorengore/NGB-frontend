import { Select, SelectItem } from "@heroui/select";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { CameraIcon, UserIcon } from "lucide-react";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";

import ProfilePictureModal from "../modals/profile-picture-modal";

import { currencies } from "@/data";
import { GetStartedFormProps } from "@/types/interface";

const GetStartedForm = ({
  control,
  errors,
  register,
  setValue,
}: GetStartedFormProps) => {
  const {
    isOpen: isOpenProfilePicture,
    onOpen: onOpenProfilePicture,
    onOpenChange: onOpenChangeProfilePicture,
  } = useDisclosure();

  return (
    <>
      <Card className="bg-transparent" shadow="none">
        <CardBody>
          <div className="items-center justify-center max-w-xl mx-auto w-full">
            <h2 className="text-5xl text-center leading-[60px] font-bold ">
              Welcome to Natural Born Gamers
            </h2>
          </div>
          <div className="relative mx-auto my-14 p-14 bg-black/50 w-[70px] h-[70px] flex items-center justify-center rounded-full">
            <div>
              <UserIcon size={70} />
            </div>
            <Tooltip className="" content="Update profile picture">
              <Button
                isIconOnly
                className="absolute w-[50px] flex items-center justify-center  h-[50px]  -bottom-3 right-0 p-4 rounded-full  bg-black"
                onPress={onOpenProfilePicture}
              >
                <CameraIcon size={90} />
              </Button>
            </Tooltip>
          </div>
          <div className="flex flex-col gap-6">
            <Input
              {...register("username")}
              errorMessage={errors?.username?.message}
              isInvalid={!!errors?.username?.message}
              label="Username"
              labelPlacement="outside"
              placeholder="username"
              size="lg"
              variant="bordered"
            />
            <Input
              {...register("email")}
              errorMessage={errors?.email?.message}
              isInvalid={!!errors?.email?.message}
              label="Email"
              labelPlacement="outside"
              placeholder="example@user.com"
              size="lg"
              variant="bordered"
            />
            <Select
              {...register("currency")}
              errorMessage={errors?.currency?.message}
              isInvalid={!!errors?.currency?.message}
              label="Currency"
              labelPlacement="outside"
              placeholder="EUR"
              size="lg"
              variant="bordered"
            >
              {currencies.map((currency) => (
                <SelectItem
                  key={currency.key}
                  description={currency.description}
                >
                  {currency.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </CardBody>
      </Card>
      <ProfilePictureModal
        isOpen={isOpenProfilePicture}
        setValue={setValue}
        onOpenChange={onOpenChangeProfilePicture}
      />
    </>
  );
};

export default GetStartedForm;

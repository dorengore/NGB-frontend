"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Switch } from "@heroui/switch";

import { GameGeneralSettingsSchema } from "@/lib/validations";
import NavigateBackButton from "@/components/buttons/navigate-back-button";
import { coaches, substitutes, teamsSize } from "@/data";

type GameGeneralSettingsFormData = z.infer<typeof GameGeneralSettingsSchema>;

const TournamentGeneralSettings = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<GameGeneralSettingsFormData>({
    resolver: zodResolver(GameGeneralSettingsSchema),
    defaultValues: {
      teamSize: "",
      substitutes: "",
      coaches: "",
      allowFreeAgents: false,
      headReadiesTeam: true,
      showUnlistedTournaments: true,
      tournamentChat: false,
      customPrice: "",
    },
  });

  const onSubmit = handleSubmit(async (values: GameGeneralSettingsFormData) => {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div className="md:p-6">
      <NavigateBackButton />
      <div>
        <Card fullWidth className="bg-transparent pt-10" shadow="none">
          <CardBody>
            <div className="items-center justify-center  mb-10 mx-auto w-full">
              <h2 className="text-4xl  leading-[60px] font-bold">General</h2>
              <p className="text-tiny">Edit general settings here.</p>
            </div>

            <form className="flex gap-4 flex-col" onSubmit={onSubmit}>
              <h2 className="text-2xl my-2 font-bold">Team settings</h2>
              <div className="flex gap-4">
                <Select
                  {...register("teamSize")}
                  label="Team Size"
                  labelPlacement="outside"
                  placeholder="1v1"
                  size="lg"
                  variant="bordered"
                >
                  {teamsSize.map((team) => (
                    <SelectItem key={team.key}>{team.name}</SelectItem>
                  ))}
                </Select>
                <Select
                  {...register("substitutes")}
                  label="Substitutes"
                  labelPlacement="outside"
                  placeholder="None"
                  size="lg"
                  variant="bordered"
                >
                  {substitutes.map((substitute) => (
                    <SelectItem key={substitute.key}>
                      {substitute.name}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  {...register("coaches")}
                  label="Coaches"
                  labelPlacement="outside"
                  placeholder="None"
                  size="lg"
                  variant="bordered"
                >
                  {coaches.map((coache) => (
                    <SelectItem key={coache.key}>{coache.name}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex items-start flex-col gap-5">
                <Switch {...register("allowFreeAgents")}>
                  <div>
                    <h2>Allow Free Agents</h2>
                    <p className="text-xs">
                      Allow free agents and incomplete teams to sign up to be
                      automatically matched into complete teams right before the
                      tournament starts. Only teams with all players in the
                      lineup readied up are eligible to be matched.
                    </p>
                  </div>
                </Switch>
                <Switch {...register("headReadiesTeam")}>
                  <div>
                    <h2>Team head readies team</h2>
                    <p className="text-xs">
                      Allow the coach or team captain to ready up their own team
                      members for them.
                    </p>
                  </div>
                </Switch>
              </div>

              <h2 className="text-2xl my-2 font-bold">Visibility</h2>
              <Switch {...register("showUnlistedTournaments")}>
                <div>
                  <h2>Unlisted</h2>
                  <p className="text-xs">
                    Unlisted tournaments are hidden for other users and can only
                    be accessed via a direct link.
                  </p>
                </div>
              </Switch>

              <h2 className="text-2xl my-2 font-bold">Other</h2>
              <Switch {...register("tournamentChat")}>Tournament chat</Switch>

              <Input
                label="Custom Price"
                {...register("customPrice")}
                labelPlacement="outside"
                placeholder="Custom Price"
                size="lg"
                variant="bordered"
              />

              <Button
                className="w-fit ml-auto"
                color="primary"
                isLoading={isLoading}
                radius="full"
                type="submit"
              >
                Save
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default TournamentGeneralSettings;

import { Button } from "@heroui/button";
import { PlusIcon } from "lucide-react";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Card, CardBody } from "@heroui/card";

import CreateTournament from "../spaces/cards/create-tournament";
import CreateSpace from "../cards/spaces/create-space";
import CreateTeam from "../spaces/cards/create-team";

const NavbarCreateModal = () => {
  return (
    <>
      <Popover
        placement="left"
        showArrow={true}
        style={{
          zIndex: 50,
        }}
      >
        <PopoverTrigger>
          <Button isIconOnly radius="full" size="sm">
            <PlusIcon size={18} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="gap-1 items-start">
          <CreateTournament
            renderPressable={(onPress) => (
              <Card
                fullWidth
                isPressable
                className="bg-transparent hover:bg-blue-gray-800"
                radius="sm"
                shadow="none"
                onPress={onPress}
              >
                <CardBody className="p-0  px-1">
                  <div className="w-full flex items-center justify-start">
                    {/* <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-gray-900">
                      <JoystickIcon />
                    </div> */}
                    <div className="flex flex-col gap-1 items-start p-3">
                      <h2 className="text-[1rem] font-bold">Tournament</h2>
                      <p className="text-tiny">
                        Create tournaments for your friends and community.
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
            spaceName="Global"
          />

          <CreateSpace
            renderTrigger={(onOpen: () => void) => {
              return (
                <Card
                  fullWidth
                  isPressable
                  className="bg-transparent hover:bg-blue-gray-800 "
                  radius="sm"
                  shadow="none"
                  onPress={onOpen}
                >
                  <CardBody className="p-0 px-1">
                    <div className="w-full flex items-center justify-start">
                      {/* <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-blue-gray-900">
                      <RocketIcon />
                    </div> */}
                      <div className="flex flex-col gap-1 items-start p-3">
                        <h2 className="text-[1rem] font-bold">Space</h2>
                        <p className="text-tiny">
                          Organize, grow and manage your space.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              );
            }}
          />

          <CreateTeam
            renderPressable={(onPress) => (
              <Card
                fullWidth
                isPressable
                className="bg-transparent hover:bg-blue-gray-800"
                radius="sm"
                shadow="none"
                onPress={onPress}
              >
                <CardBody className="p-0  px-1">
                  <div className="w-full flex items-center justify-start">
                    <div className="flex flex-col gap-1 items-start p-3">
                      <h2 className="text-[1rem] font-bold">Team</h2>
                      <p className="text-tiny">Compete with your friends.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavbarCreateModal;

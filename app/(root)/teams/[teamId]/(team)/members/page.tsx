"use client";

import { Card, CardBody } from "@heroui/card";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";
import { useParams } from "next/navigation";
import { Image } from "@heroui/image";

import InviteMembers from "@/components/teams/invite-members";
import { apiRequest } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";
import { TeamDetailsInterface } from "@/types/interface";
import { User } from "@/lib/redux/api";
import ProgressBarLink from "@/components/progress/progress-link";

const TeamMembers = () => {
  const [teamDetails, setTeamDetails] = useState<TeamDetailsInterface | null>(
    null
  );
  const [teamMembers, setTeamMembers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { teamId } = useParams();
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const fetchTeamDetails = async () => {
      setIsLoading(true);
      try {
        const response = await apiRequest(`/teams/${teamId}`, "GET", token);

        // setTeamDetails(response);
        setTeamMembers(response?.team?.members);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamDetails();
  }, [teamId, token]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-10">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="pb-20">
      <InviteMembers
        renderPressable={(onPress) => (
          <Card
            fullWidth
            isPressable
            className="mt-6 bg-transparent border-dotted border-gray-600 border-2"
            shadow="none"
            onPress={onPress}
          >
            <CardBody className="flex-row items-center gap-4">
              <div className="w-[50px] h-[50px] rounded-full bg-blue-gray-800 flex items-center justify-center">
                <PlusIcon />
              </div>
              <div>
                <h2>Invite</h2>
                <p>Invite Members to you team</p>
              </div>
            </CardBody>
          </Card>
        )}
      />
      <div className="grid grid-cols-5 mt-5">
        {teamMembers?.map((member) => (
          <Card key={member.id} className="bg-transparent" shadow="none">
            <CardBody className="items-center justify-center gap-4">
              <Image
                height={120}
                radius="full"
                src={`${member.imageData}`}
                width={120}
              />
              <ProgressBarLink href={`/users/${member.id}`}>
                <h2>{member.username}</h2>
              </ProgressBarLink>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

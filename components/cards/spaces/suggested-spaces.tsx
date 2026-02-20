"use client";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import { Avatar } from "@heroui/avatar";

import LoadingSpinner from "@/components/loading-spinner";
import { useGetAllSpacesQuery } from "@/lib/redux/api/space-api";
import JoinLeaveSpaceButton from "@/components/buttons/join-leave-space";
import ProgressBarLink from "@/components/progress/progress-link";

const SuggestedSpaces = () => {
  const router = useRouter();

  const { data, isLoading, isError } = useGetAllSpacesQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <h2>No Spaces available right now.</h2>;
  }

  // @ts-ignore
  const spaces = data?.spaces;

  return (
    <div>
      <div className="flex items-center mb-10 justify-between">
        <h2 className="text-2xl xl:text-3xl font-bold ">Suggested Spaces</h2>
        <Button
          radius="full"
          variant="flat"
          onPress={() => router.push("/spaces")}
        >
          View All
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {spaces.slice(0, 10).map((space: any) => (
          <div key={space.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar size="lg" src={space.imageData} />
              <div>
                <ProgressBarLink href={`/s/${space.url}`}>
                  <h2>{space.name}</h2>
                </ProgressBarLink>
              </div>
            </div>
            <JoinLeaveSpaceButton spaceId={space.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedSpaces;

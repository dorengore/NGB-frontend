"use client";
import { useParams } from "next/navigation";

import AddSpaceVideoCard from "@/components/spaces/cards/add-space-video-card";
import FeedCard from "@/components/spaces/cards/feed-card";

const FeedPage = () => {
  const { spaceId } = useParams();

  return (
    <section className="px-3 w-full">
      <div className="flex gap-6 w-full ">
        <div className="flex-1 flex flex-col gap-8">
          <FeedCard />
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <div className="h-[230px] lg:w-[430px]">
            <AddSpaceVideoCard spaceName={`${spaceId}`} />
          </div>
          <div>
            <h2>Members</h2>
            <p>1 members</p>
          </div>
          <div>
            <h2>Description</h2>
            <p>1 Description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedPage;

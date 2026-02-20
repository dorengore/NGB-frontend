import AddSpaceVideoCard from "@/components/spaces/cards/add-space-video-card";

const SpaceAboutPage = ({ params }: any) => {
  return (
    <section className="w-full px-3">
      <div className="h-[350px] ">
        <AddSpaceVideoCard spaceName={params.spaceId} />
      </div>
      <div className="space-y-5 mt-5">
        <div>
          <h2 className="font-bold mb-1">Members</h2>
          <p>1 members</p>
        </div>
        <div>
          <h2 className="font-bold mb-1">Description</h2>
          <p>dawdawdawdawd</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-2xl">Members</h2>
      </div>
    </section>
  );
};

export default SpaceAboutPage;

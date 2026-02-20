import { Button } from "@heroui/button";

import ProgressBarLink from "@/components/progress/progress-link";
import TournamentSettingsTabs from "@/components/tabs/tournament-settings-tabs";
import TournamentLinkCard from "@/components/spaces/cards/tournament-link-card";

const TournamentManagePage = ({
  params,
}: {
  params: { tournamentId: string; spaceId: string };
}) => {
  const { tournamentId, spaceId } = params;

  console.log(params);

  return (
    <>
      <div className="lg:flex items-center gap-5 justify-center mt-10 flex-col hidden">
        <h2 className="text-3xl">Not Available for this screen size</h2>
        <Button as={ProgressBarLink} color="primary" href="/" radius="full">
          Return Home
        </Button>
      </div>
      <section className="w-full  mx-auto lg:hidden flex gap-3">
        <div className="flex  flex-col w-full lg:w-fit px-5 gap-4">
          <TournamentLinkCard />
          <TournamentSettingsTabs
            spaceUrl={spaceId}
            tournamentId={parseInt(tournamentId)!}
          />
        </div>
      </section>
    </>
  );
};

export default TournamentManagePage;

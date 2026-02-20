import { Button } from "@heroui/button";
import { ExternalLinkIcon } from "lucide-react";

interface TournamentBracketProps {
  teamOne: any;
  teamTwo: any;
}

const TournamentBracket = ({ teamOne, teamTwo }: TournamentBracketProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2>Match 1</h2>
        <Button isIconOnly>
          <ExternalLinkIcon />
        </Button>
      </div>
      {/* <div>
        <MatchCard />
        <MatchCard />
      </div> */}
    </div>
  );
};

export default TournamentBracket;

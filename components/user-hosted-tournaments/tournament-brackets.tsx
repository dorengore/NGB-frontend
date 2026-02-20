import MatchCard from "../cards/match-card";

import { rounds } from "@/data";

const TournamentBrackets = () => {
  return (
    <div>
      <div className="flex gap-16 w-full px-5">
        {rounds.map((round, index) => (
          <div
            key={index}
            className="flex w-full flex-col gap-2"
            style={
              {
                // paddingTop: index * 93,
                // paddingBottom: index * 93,
              }
            }
          >
            <div className="text-gray-400 text-sm mb-2">
              <span className="bg-gray-800 px-2 py-1 rounded">
                Match {index + 1}
              </span>
            </div>
            {round.matches.map((match, matchIndex) => (
              <div key={matchIndex} className="relative" style={{}}>
                <MatchCard teamOne={match.team1} teamTwo={match.team2} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentBrackets;

import { Brackets, CalendarIcon, UsersIcon } from "lucide-react";

import TournamentFormatCard from "../cards/tournament-format-card";

const TournamentFormat = () => {
  return (
    <div className="w-[65%] ">
      <h2 className="font-semibold text-2xl mb-2">Format</h2>
      <div className="grid grid-cols-3 gap-4  ">
        <TournamentFormatCard
          content="League of Legends, EUNE"
          header="Game & region"
          image="/assets/icons/lol-icon.svg"
        />
        <TournamentFormatCard
          content="45 minutes before start"
          header="Check-in period"
          icon={CalendarIcon}
        />
        <TournamentFormatCard
          content="5vs5"
          header="Team Size"
          icon={UsersIcon}
        />
        <TournamentFormatCard
          content="Single Elimination"
          header="Format"
          icon={Brackets}
        />
      </div>
    </div>
  );
};

export default TournamentFormat;

import TeamCard from "../cards/team-card";

import { UserTeam } from "@/types/interface";

const UserTeams = ({ teams }: { teams: UserTeam[] }) => {
  const renderTeams = teams.map((team) => (
    <TeamCard key={team.id} team={team} />
  ));

  return <div className="flex items-center gap-6">{renderTeams}</div>;
};

export default UserTeams;

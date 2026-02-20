import { ReactNode } from "react";

import UnauthorizedTournamentUser from "@/components/unauthorized-tournament-user";

const TournamentMangeLayout = ({ children }: { children: ReactNode }) => {
  return <UnauthorizedTournamentUser>{children}</UnauthorizedTournamentUser>;
};

export default TournamentMangeLayout;

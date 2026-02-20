import { List } from "lucide-react";

const TournamentFreeAgents = () => {
  return (
    <div className="px-6">
      <div>
        <h2 className="text-xl font-bold">Free agents</h2>
        <p>These are the teams that are still looking for more members.</p>
      </div>
      {/* No Free agents  API integration left */}
      <div className="flex mt-14 flex-col items-center justify-center gap-4">
        <List size={40} />
        <h2 className="text-2xl">No teams</h2>
        <p>There are currently no teams looking for more members.</p>
      </div>
    </div>
  );
};

export default TournamentFreeAgents;

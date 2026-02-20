import { UsersIcon } from "lucide-react";

const TournamentParticipants = () => {
  return (
    <div>
      {/* No teams  API integration left*/}
      <div className="flex mt-16 flex-col items-center justify-center gap-4">
        <UsersIcon size={40} />
        <h2 className="text-2xl">No teams</h2>
        <p>There are currently no Teams registered for this Tournament.</p>
      </div>
    </div>
  );
};

export default TournamentParticipants;

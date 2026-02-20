import { Trophy } from "lucide-react";

const TournamentResults = () => {
  return (
    <div>
      {/* No Results yet. API integration left */}
      <div className="flex mt-16 flex-col items-center justify-center gap-4">
        <Trophy size={40} />
        <h2 className="text-2xl">No results</h2>
        <p>There are no results available yet.</p>
      </div>
    </div>
  );
};

export default TournamentResults;

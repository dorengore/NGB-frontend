import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRight } from "lucide-react";

import RecommendedTournamentCard from "@/components/cards/game-cards/recommended-tournament-card";
import TournamentListCard from "@/components/cards/game-cards/tournament-list-card";
import { marketplaceList, tournaments } from "@/data";
import MarketplaceCard from "@/components/cards/marketplace-card";
import ItemsSlider from "@/components/slider";

const GamePage = () => {
  return (
    <section className="w-full p-5">
      <div>
        <h2 className="text-xl mb-4 font-bold">Recommended Tournaments</h2>
        <div className="hidden lg:block">
          <RecommendedTournamentCard />
        </div>
        <div className="lg:flex hidden items-stretch gap-3 my-7">
          {tournaments.slice(0, 3).map((tournament) => (
            <TournamentListCard
              key={tournament.id}
              isLadder={false}
              tournament={tournament}
            />
          ))}
        </div>
        <ItemsSlider>
          {tournaments.map((tournament) => (
            <TournamentListCard
              key={tournament.id}
              isLadder={false}
              tournament={tournament}
            />
          ))}
        </ItemsSlider>
      </div>
      <div className="mt-10">
        <div className="flex mb-4 items-center justify-between">
          <h2 className="text-xl  font-bold">Upcoming tournaments</h2>
          <Link>
            <Button isIconOnly radius="full">
              <ArrowRight />
            </Button>
          </Link>
        </div>
        <div className="hidden lg:grid grid-cols-3 lg:pr-3 items-stretch gap-3 my-7">
          {tournaments.slice(0, 3).map((tournament) => (
            <TournamentListCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
        <ItemsSlider>
          {tournaments.map((tournament) => (
            //  <motion.div key={tournament.id} className="w-fit">

            <TournamentListCard
              key={tournament.id}
              isLadder={false}
              tournament={tournament}
            />
            // </motion.div>
          ))}
        </ItemsSlider>
      </div>
      <div className="mt-10">
        <div className="flex  mb-2  items-center justify-between">
          <h2 className="text-xl font-bold">Marketplace Listing</h2>
          <Link>
            <Button isIconOnly radius="full">
              <ArrowRight />
            </Button>
          </Link>
        </div>
        <div className="hidden lg:grid grid-cols-3 lg:pr-3 items-stretch gap-3 my-7">
          {marketplaceList.slice(0, 3).map((market) => (
            <MarketplaceCard key={market.id} market={market} />
          ))}
        </div>
        <div className=" gap-3 my-16 mt-5">
          <ItemsSlider>
            {marketplaceList.map((market) => (
              <MarketplaceCard key={market.id} market={market} />
            ))}
          </ItemsSlider>
        </div>
      </div>
    </section>
  );
};

export default GamePage;

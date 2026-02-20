import { Image } from "@heroui/image";

const TournamentSettings = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-2">Settings</h2>
      <Image src="/assets/images/summoner-rift.png" />
      <div className="grid grid-cols-2 gap-3 py-5">
        <div>
          <h2 className="text-xs font-bold opacity-80 mb-1">Map</h2>
          <p>Summoner&apos;s Rift</p>
        </div>
        <div>
          <h2 className="text-xs font-bold opacity-80 mb-1">Game mode</h2>
          <p>Destroy Nexus</p>
        </div>
        <div>
          <h2 className="text-xs font-bold opacity-80 mb-1">Pick mode</h2>
          <p>Blind Pick</p>
        </div>
      </div>
    </div>
  );
};

export default TournamentSettings;

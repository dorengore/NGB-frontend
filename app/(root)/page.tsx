import ContentCarousel from "@/components/content-carousel";
import LeagueOfLegendsHero from "@/components/league-of-legends-section";
import BecomeOrganizer from "@/components/become-organizer";
import DownloadClient from "@/components/download-client";

export default function Home() {
  return (
    <section>
      <ContentCarousel />

      {/* <FeaturedGames /> */}
      {/* <LeagueOfLegendsHero /> */}
      <div className="p-4 mt-10 flex flex-col gap-10">
        <BecomeOrganizer />
        <DownloadClient />

        {/*
        <FeatureCard
          buttonIcon={AppWindowIcon}
          buttonText={"Download now"}
          className="flex-row-reverse"
          content={"All your esports competition, just a click away."}
          heading={`Challenger mode
                    for windows`}
          onClick={() => {}}
        /> */}
      </div>
    </section>
  );
}

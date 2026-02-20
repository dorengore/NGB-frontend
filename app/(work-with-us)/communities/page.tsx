import {
  Layers2Icon,
  MessageCircle,
  RocketIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import bgImage from "@/assets/images/auth-bg.png";
import ListItemWithIcon from "@/components/hero-list-item";
import CommunityInfoCard from "@/components/cards/community-cards/community-info-card";
import { tournamentList } from "@/data";
import InfoCard from "@/components/cards/community-cards/info-card";

const CommunitiesPage = () => {
  return (
    <section className=" ">
      <div
        className={` w-full relative bg-cover h-screen`}
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7))",
          }}
        />
        <div className="flex flex-col-reverse lg:flex-row relative  p-7 py-32 z-20  items-center justify-between gap-10">
          <div className="flex flex-col gap-10 ">
            <h2 className="text-4xl font-bold">
              Host community events for free
            </h2>
            <ul className="flex flex-col gap-4">
              <ListItemWithIcon
                content="A home for your community competitions"
                icon={UsersIcon}
              />
              <ListItemWithIcon
                content="Tournaments, ladders and leaderboards for all skill-levels"
                icon={TrophyIcon}
              />
              <ListItemWithIcon
                content="Tools for community communication and engagement"
                icon={MessageCircle}
              />
            </ul>
            <Button className="font-bold text-lg" color="primary" radius="full">
              Create a Space for free
            </Button>
          </div>
          <div className="">
            <Image src="/assets/images/community-hero-img.png" />
          </div>
        </div>
      </div>
      <section className="text-center mt-60 md:mt-[400px] lg:mt-10">
        <h2 className="mb-7"> Trusted by some of the best in the business</h2>
        <div className="lg:flex mx-auto max-w-lg lg:max-w-full grid grid-cols-2 md:grid-cols-3 px-10 items-center justify-center gap-16">
          <Image height={76} src="/assets/images/ubisoft.png" width={136} />
          <Image height={76} src="/assets/images/ubisoft.png" width={136} />
          <Image height={76} src="/assets/images/ubisoft.png" width={136} />
          <Image height={76} src="/assets/images/ubisoft.png" width={136} />
          <Image height={76} src="/assets/images/ubisoft.png" width={136} />
          <Image height={76} src="/assets/images/ubisoft.png" width={136} />
        </div>
      </section>
      <section className="lg:py-10 py-20">
        <CommunityInfoCard
          heading="Tools for effortless community tournaments"
          imgSrc="/assets/images/tournament-img.png"
          listItems={tournamentList}
        />
        <div className="flex flex-col md:flex-row gap-7 lg:px-14 mt-20">
          <InfoCard
            bgTransparent
            heading="Your own arena"
            icon={RocketIcon}
            text="Get a free Challengermode Space for all your tournaments, ladders and leaderboards, customized to your liking."
          />

          <InfoCard
            bgTransparent
            heading="Automated tournaments"
            icon={TrophyIcon}
            text="Host tournaments with little to no effort thanks to the automated tournaments and game integrations."
          />

          <InfoCard
            bgTransparent
            heading="Templates"
            icon={Layers2Icon}
            text="Set up your tournament in seconds using our curated tournament templates or create your own."
          />
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row items-center gap-20 justify-center px-7 py-20">
        <div className="lg:w-[70%]">
          <Image alt="create space" src="/assets/images/spaces-img.png" />
        </div>
        <div className="flex flex-col items-start gap-10">
          <h2 className="lg:text-5xl text-3xl font-bold">
            Spaces - your own esports arena
          </h2>
          <p>
            Create a Space for free to host your own competitions, grow your
            community and show off your events.
          </p>
          <Button className="px-8" color="primary" radius="full">
            Create a Space for free
          </Button>
        </div>
      </section>
      <section className="py-10">
        <CommunityInfoCard
          heading="A new home for your gaming community"
          imgSrc="/assets/images/new-home.png"
          listItems={tournamentList}
        />
        <div className="flex  flex-col md:flex-row gap-7 lg:px-14 mt-20">
          <InfoCard
            bgTransparent
            heading="Your own arena"
            icon={RocketIcon}
            text="Get a free Challengermode Space for all your tournaments, ladders and leaderboards, customized to your liking."
          />

          <InfoCard
            bgTransparent
            heading="Automated tournaments"
            icon={TrophyIcon}
            text="Host tournaments with little to no effort thanks to the automated tournaments and game integrations."
          />

          <InfoCard
            bgTransparent
            heading="Templates"
            icon={Layers2Icon}
            text="Set up your tournament in seconds using our curated tournament templates or create your own."
          />
        </div>
      </section>
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 px-14 mt-20">
          <InfoCard
            className="py-10"
            heading="Your own arena"
            icon={RocketIcon}
            text="Get a free Challengermode Space for all your tournaments, ladders and leaderboards, customized to your liking."
          />

          <InfoCard
            className="py-10"
            heading="Automated tournaments"
            icon={TrophyIcon}
            text="Host tournaments with little to no effort thanks to the automated tournaments and game integrations."
          />

          <InfoCard
            className="py-10"
            heading="Templates"
            icon={Layers2Icon}
            text="Set up your tournament in seconds using our curated tournament templates or create your own."
          />
          <InfoCard
            className="py-10"
            heading="Your own arena"
            icon={RocketIcon}
            text="Get a free Challengermode Space for all your tournaments, ladders and leaderboards, customized to your liking."
          />

          <InfoCard
            className="py-10"
            heading="Automated tournaments"
            icon={TrophyIcon}
            text="Host tournaments with little to no effort thanks to the automated tournaments and game integrations."
          />

          <InfoCard
            className="py-10"
            heading="Templates"
            icon={Layers2Icon}
            text="Set up your tournament in seconds using our curated tournament templates or create your own."
          />
        </div>
      </section>
      <section className="flex py-10 items-center justify-center flex-col gap-8">
        <h2 className="lg:text-5xl text-3xl font-bold lg:px-52 w-fit leading-[40px] md:leading-[60px] text-center">
          Get started by creating your Space for free!
        </h2>
        <div className="flex gap-4">
          <Button color="primary" radius="full">
            Create a Space for free
          </Button>
          <Button radius="full">Get in touch</Button>
        </div>
      </section>
    </section>
  );
};

export default CommunitiesPage;

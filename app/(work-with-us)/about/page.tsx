import { Image } from "@heroui/image";
import {
  Code2,
  MailIcon,
  MapIcon,
  PhoneIcon,
  RocketIcon,
  TrophyIcon,
} from "lucide-react";

import DirectionCard from "@/components/cards/direction-card";
import ContactCard from "@/components/cards/contact-card";
import InfoCard from "@/components/cards/community-cards/info-card";
import VideoBg from "@/components/video-bg";

const AboutPage = () => {
  return (
    <section className="">
      <VideoBg />

      <section className="flex gap-32 p-10">
        <div className="lg:w-[70%] flex flex-col items-start gap-10">
          <h2 className="text-5xl font-bold">Our story</h2>
          <div>
            <h2 className="text-2xl font-bold mb-4">What we do</h2>
            <p>
              We&apos;re working on a platform that offers online esports
              infrastructure to all the key stakeholders in the industry
              including players, organizers and game developers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Who we are</h2>
            <p>
              We&apos;re a team of gamers, nerds, techies, athletes, creators
              and dreamers. A team made up of people who are the best at what
              they do. We have worked at companies like Google, Microsoft, ESL,
              Twitch, and Spotify. Some of us have been professional esports
              players but we all share a love for gaming. By merging both
              world-class technical and business expertise with years of esports
              experience, we&apos;ve created a platform that enables the full
              potential of esports and competitive gaming.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            alt="valorant reyna"
            className="w-[400px]"
            src="/assets/images/reyna.png"
          />
        </div>
      </section>

      <section className="lg:flex lg:gap-10 gap-20 grid md:grid-cols-2 items-center justify-around py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-2">2024</h2>
          <p>Founded</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-2">80k+</h2>
          <p>Organizers</p>
        </div>

        <div className="text-center">
          <h2 className="text-5xl font-bold mb-2">500k+</h2>
          <p>Competitions per month</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-2">$28M</h2>
          <p>Funding</p>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-center text-4xl font-bold mb-10">
          Get started with NBG
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20">
          <InfoCard
            bgTransparent
            heading="Play"
            icon={TrophyIcon}
            link="/"
            linkText="Open NBG"
            text="Easy access to esports no matter your skill-level."
          />
          <InfoCard
            bgTransparent
            heading="Organize"
            icon={RocketIcon}
            link="/"
            linkText="Build your esports community"
            text="Create competitions and monetize your community."
          />
          <InfoCard
            bgTransparent
            heading="Develop"
            icon={Code2}
            link="/"
            linkText="Integrate with Challengermode"
            text="Launch, scale and monetize esports games."
          />
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-4xl font-bold">Contact</h2>
        <div className="flex flex-col gap-10 p-10">
          <div className="flex lg:flex-row flex-col gap-10">
            <DirectionCard
              content="Malmskillnadsgatan 36, 111 57 Stockholm, Sweden"
              heading="Stockholm, Sweden"
              href=""
              icon={MapIcon}
              linkText="Directions"
            />
            <DirectionCard
              content="ミレニアルズ京都内, 8F, 235 Yamazakicho, Nakagyo Ward, Kyoto 604-8032"
              heading="Kyoto, Japan"
              href=""
              icon={MapIcon}
              linkText="Directions"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <ContactCard
              content="support@challengermode.com"
              heading="Support"
              icon={MailIcon}
            />
            <ContactCard
              content="team@challengermode.com"
              heading="Inquiries"
              icon={MailIcon}
            />
            <ContactCard
              content="+46(0)8 - 121 595 40"
              heading="Phone"
              icon={PhoneIcon}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;

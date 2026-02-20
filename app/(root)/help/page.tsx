import {
  BookIcon,
  JoystickIcon,
  MessageCircleIcon,
  TrophyIcon,
  User2Icon,
  Wallet2Icon,
} from "lucide-react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";

import DirectionCard from "@/components/cards/direction-card";
import PopularTopicsCard from "@/components/cards/popular-topics/popular-topics-card";
import NavigateBackButton from "@/components/buttons/navigate-back-button";

const HelpCenterPage = () => {
  return (
    <div className="px-3 pb-20">
      <NavigateBackButton />
      <div className="text-5xl space-y-5 my-8 font-bold">
        <h2>Hi MrWick2323,</h2>
        <p>how can we help?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card fullWidth className="p-10">
          <CardBody className="items-start ">
            <MessageCircleIcon size={130} />
            <div className="flex flex-col gap-5 mt-6">
              <h2 className="text-5xl font-bold">Support chat</h2>
              <p className="text-xl">
                Get in touch with our support team right away. We&apos;re here
                to help you in any way we can.
              </p>
              <Link href="">
                <Button color="primary" radius="full" size="lg">
                  Chat with us
                </Button>
              </Link>
            </div>
          </CardBody>
        </Card>
        <div className="flex flex-col  gap-4">
          <DirectionCard
            className="p-4"
            content="Find how-to guides and answers to your questions."
            heading="Knowledge Base"
            icon={BookIcon}
            linkText="View Knowledge Base"
          />

          <DirectionCard
            className="p-4"
            content="Learn from others in the Challengermode community."
            heading="Discord"
            icon={BookIcon}
            linkText="Go to Discord"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">Popular topics</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PopularTopicsCard
            className="p-4"
            content="These articles will help you get set up and started on NBG."
            heading="Get started"
            icon={TrophyIcon}
            linkText="Learn More"
          />
          <PopularTopicsCard
            className="p-4"
            content="Are you here to compete in tournaments and events? Let us help you get started."
            heading="Play"
            icon={JoystickIcon}
            linkText="Learn More"
          />
          <PopularTopicsCard
            className="p-4"
            content="Explore articles related to your account settings, verification emails and more."
            heading="My account"
            icon={User2Icon}
            linkText="Learn More"
          />
          <PopularTopicsCard
            className="p-4"
            content="Help with payments and transactions to and from your NBG wallet."
            heading="Payments"
            icon={Wallet2Icon}
            linkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;

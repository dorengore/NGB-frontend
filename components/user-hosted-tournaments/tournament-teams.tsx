import { Card, CardBody } from "@heroui/card";

const TournamentTeams = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold text-2xl mb-2">Teams</h2>
        <Card className="bg-transparent" shadow="sm">
          <CardBody className="flex-row items-center justify-around">
            <TeamInfo content="0" heading="Registered" />
            <TeamInfo content="0" heading="Ready" />
            <TeamInfo content="8" heading="Slots" />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

const TeamInfo = ({
  heading,
  content,
}: {
  heading: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="opacity-80 text-sm">{heading}</h2>
      <p className="text-xl">{content}</p>
    </div>
  );
};

export default TournamentTeams;

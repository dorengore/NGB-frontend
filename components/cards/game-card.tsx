import { Card, CardBody } from "@heroui/card";
import Image from "next/image";
import { Link } from "@heroui/link";
import type { Game } from "@/types/interface";

const GameCard = ({
  game,
  isModal,
  onSelectGame,
}: {
  isModal?: boolean;
  onSelectGame?: (game: Game) => void;
  game: Game;
}) => {
  return (
    <Card
      className="mb-5"
      isPressable={!!isModal}
      onPress={() => {
        if (onSelectGame) {
          onSelectGame(game);
        }
      }}
    >
      <CardBody className="p-0 ">
        {game.imageUrl ? (
          isModal ? (
            <Image
              height={240}
              width={300}
              className="w-full h-[240px] object-cover"
              src={game.imageUrl}
              alt={game.name || "Game Image"}
            />
          ) : (
            <Link href={`/${game.name}`}>
              <Image
                height={240}
                width={300}
                className="w-full h-[240px] object-cover"
                src={game.imageUrl}
                alt={game.name || "Game Image"}
              />
            </Link>
          )
        ) : (
          <p className="text-red-500">Image not available</p>
        )}

        {isModal ? (
          <div
            className={`mt-2 px-2 pb-2 text-white ${isModal ? "text-medium" : "text-lg"}`}
          >
            {game.name}
          </div>
        ) : (
          <Link
            className={`mt-2 px-2 pb-2 text-white ${isModal ? "text-medium" : "text-lg"}`}
            href={game.name}
          >
            {game.name}
          </Link>
        )}
      </CardBody>
    </Card>
  );
};

export default GameCard;

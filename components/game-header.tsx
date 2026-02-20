import Image from "next/image";

import CreateDropdown from "./dropdowns/create-dropdown";
import AddGameAccountButton from "./buttons/add-summoner";

const GameHeader = ({
  gameName,
  gameLogo,
  backgroundImage,
}: {
  gameName: string;
  gameLogo: string;
  backgroundImage: string;
}) => {
  return (
    <div className=" h-[400px]">
      <section className="w-full h-[350px]  relative">
        <div
          className="absolute  z-10 inset-0"
          style={{
            background:
              "linear-gradient(to top,  rgb(33, 37, 41, 1) , rgb(33, 37, 41, 0.3) )",
          }}
        />
        <div className="w-full h-[350px]  relative overflow-hidden">
          <Image
            alt={gameName}
            className="w-full"
            layout="fill"
            objectFit="cover"
            src={`${backgroundImage}`}
          />
        </div>
        {/* <div className="z-20 absolute inset-0 bg-custom-gradient" /> */}
      </section>
      <div
        className=" relative -top-[140px] z-30 w-full px-5   gap-6 flex items-center  "
        style={{
          background:
            "linear-gradient(to top,  rgb(33, 37, 41, 1) , rgb(33, 37, 41, .1) )",
        }}
      >
        <div className="relative md:w-[160px] w-[190px] h-[200px] bg-red-400 rounded-lg overflow-hidden">
          <Image
            alt={`${gameName} logo`}
            src={gameLogo}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-3">
          <h1 className="md:text-3xl text-xl lg:text-5xl font-bold text-white">
            {gameName}
          </h1>
          <div className="flex items-start md:items-center gap-3">
            <div className="hidden md:block">
              <CreateDropdown />
            </div>
            <AddGameAccountButton game={gameName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHeader;

import { Image } from "@heroui/image";

const FeaturedGames = () => {
  return (
    <section className=" py-16 text-white">
      <div className="text-center">
        <h2 className="text-4xl uppercase">WELCOME TO MADDEN ESPORTS</h2>
        <p className="text-tiny mb-8 mt-4 font-thin">
          Compete in the Madden Championship Series 25 Season where Champions
          <br /> are CROWNED and earn your share of the $1.7M USD Prize Pool.
        </p>
      </div>
      <section className="flex gap-4 p-5 items-center justify-center ">
        <Image src="/assets/images/zelda-img.png" />
        <Image src="/assets/images/ronin-img.png" />
        <Image src="/assets/images/pubg-img.png" />
        <Image src="/assets/images/gtav-img.png" />
        <Image src="/assets/images/cod-wz-img.png" />
      </section>
    </section>
  );
};

export default FeaturedGames;

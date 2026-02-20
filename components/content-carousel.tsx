/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";

import VideoBg from "./video-bg";

const ContentCarousel = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto md:h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={"/assets/videos/about-video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to top, rgba(33, 37, 41,1), rgba(33, 37, 41,0.1))",
        }}
      >
        {/* <h1 className="text-white max-w-xl mx-auto mb-3 text-center text-4xl md:text-6xl font-bold">
            WELCOME TO MADDEN ESPORTS
          </h1> */}
        <div className="text-center px-1">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-wider text-white md:text-6xl lg:text-7xl">
            WELCOME TO LEAGUE OF LEGENDS
          </h1>
          <p className="mb-4 text-xs sm:text-sm md:text-base mt-5 md:w-2/4 mx-auto text-white opacity-80">
            Step into the League of Legends Championship Series, where strategy
            meets skill. Battle for glory, rise as a champion, and claim your
            share of a massive prize pool in the ultimate test of teamwork and
            talent.
          </p>
        </div>
      </div>
    </section>

    // <section className="  ">
    //   {
    //     // @ts-ignore
    //     <Carousel
    //       className="h-screen"
    //       navigation={({ setActiveIndex, activeIndex, length }) => (
    //         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
    //           {new Array(length).fill("").map((_, i) => (
    //             <span
    //               key={i}
    //               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
    //               onClick={() => setActiveIndex(i)}
    //             />
    //           ))}
    //         </div>
    //       )}
    //     >
    //       <ContentCarouselItem
    //         backgroundImage={maddenBg.src}
    //         content={`Compete in the Madden Championship Series 25 Season where Champions
    //         are CROWNED and earn your share of the $1.7M USD Prize Pool.`}
    //         gameLogo={maddenLogo.src}
    //         heading="WELCOME TO MADDEN ESPORTS"
    //         onClick={() => {}}
    //       />
    //       <ContentCarouselItem
    //         backgroundImage={maddenBg.src}
    //         content={`Compete in the Madden Championship Series 25 Season where Champions
    //         are CROWNED and earn your share of the $1.7M USD Prize Pool.`}
    //         gameLogo={maddenLogo.src}
    //         heading="WELCOME TO MADDEN ESPORTS"
    //         onClick={() => {}}
    //       />
    //       <ContentCarouselItem
    //         backgroundImage={maddenBg.src}
    //         content={`Compete in the Madden Championship Series 25 Season where Champions
    //         are CROWNED and earn your share of the $1.7M USD Prize Pool.`}
    //         gameLogo={maddenLogo.src}
    //         heading="WELCOME TO MADDEN ESPORTS"
    //         onClick={() => {}}
    //       />
    //     </Carousel>
    //   }
    // </section>
  );
};

export default ContentCarousel;

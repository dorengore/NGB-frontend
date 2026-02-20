const VideoBg = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src={"/assets/videos/about-video.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0  flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1))",
        }}
      >
        <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
          Our mission is to make esports truly accessible.
        </h1>
      </div>
    </section>
  );
};

export default VideoBg;

"use client";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import Link from "next/link";

import SpaceCard from "@/components/cards/spaces/space-card";
import { useGetAllSpacesQuery } from "@/lib/redux/api/space-api";
import LoadingSpinner from "@/components/loading-spinner";
import type { SpacesInterface } from "@/types/interface";
import SpacesMobileTabs from "@/components/tabs/spaces-mobile-tabs";

const SpacesPage = () => {
  const { data, isLoading, isError } = useGetAllSpacesQuery();

  if (isError) {
    return (
      <div className="flex flex-col gap-3 mt-20 items-center justify-center">
        <h2 className="text-2xl">
          Unable to fetch spaces right now. Try again later.
        </h2>
        <Button as={Link} href="/">
          Home
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // @ts-ignore
  const spaces = data?.spaces;

  return (
    <div className="w-full">
      <section className="w-full h-[200px]  relative">
        {/* <div
          className="absolute  z-10 inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(27, 23, 38, 1), rgba(24, 11, 58, 0.3))",
          }}
        /> */}
        {/* <div className="w-full h-[200px]  relative overflow-hidden">
          <Image
            alt={""}
            className="w-full"
            src={"/assets/images/spaces-banner.png"}
          />
        </div> */}
        <div
          className=" absolute -top-[160px] z-30 w-full px-5   gap-6 flex items-center  "
          // style={{
          //   background:
          //     "linear-gradient(to top, rgba(27, 23, 38, 1), rgba(24, 11, 58, 0.1))",
          // }}
        >
          <div className="w-full  flex items-center justify-center h-[300px] rounded-lg overflow-hidden">
            <div className="flex  flex-col items-center mt-20 justify-center w-full">
              <h1 className="text-3xl mt-20 text-center text-white">
                Find your spaces on NBG
              </h1>
              <Input
                className="mt-5  max-w-lg"
                labelPlacement="outside"
                placeholder="Search for spaces"
                radius="full"
                size="lg"
                variant="bordered"
                // onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
              />
            </div>
          </div>
        </div>
        {/* <div className="z-20 absolute inset-0 bg-custom-gradient" /> */}
      </section>
      {/* <NavigateBackButton /> */}

      {/* <Card
        className="relative bg-[url('/assets/images/valo.png')] bg-cover bg-center"
        shadow="sm"
      >
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        <CardBody className="relative py-10 z-10 text-white gap-4">
          <h2 className="text-4xl">Become an organizer</h2>
          <p>
            Create a Space for free to host your own competitions, build a
            membership community and monetize.
          </p>
          <Button
            className="w-fit"
            color="primary"
            radius="full"
            startContent={<PlusIcon />}
          >
            Create Space
          </Button>
        </CardBody>
      </Card> */}
      <div className="lg:hidden">
        <SpacesMobileTabs />
      </div>
      <div className="pb-28">
        <h2 className="text-4xl mb-5">Popular Spaces</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-3  gap-3 items-center px-1">
          {spaces?.map((space: SpacesInterface) => (
            <SpaceCard
              key={space.id}
              banner={space.bannerData}
              description={space.description}
              id={space.id}
              image={
                space.imageData ? space.imageData : "/assets/avatars/8.jpg"
              }
              members="0"
              name={space.name}
              spaceUrl={space.url}
              verified={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpacesPage;

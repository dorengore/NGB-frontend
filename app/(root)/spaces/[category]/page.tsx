"use client";
import { Input } from "@heroui/input";
import { useEffect, useState } from "react";

import SpaceCard from "@/components/cards/spaces/space-card";
import LoadingSpinner from "@/components/loading-spinner";
import { apiRequest, capitalize } from "@/lib/utils/api-request";
import { useAppSelector } from "@/lib/redux/hooks";
import { SpacesInterface } from "@/types/interface";
import SpacesMobileTabs from "@/components/tabs/spaces-mobile-tabs";

interface CategorySpacesProps {
  params: {
    category: string;
  };
}
const CategorySpaces = ({ params }: CategorySpacesProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [spaces, setSpaces] = useState([]);
  const { token } = useAppSelector((state) => state.auth);

  const getSpaces = async (category: string) => {
    setIsLoading(true);
    const capitalizeCategory = capitalize(category);

    if (!token) {
      console.error("Token not available");
      setIsLoading(false);

      return;
    }

    try {
      const { spaces } = await apiRequest(
        `/spaces/category?category=${capitalizeCategory}`,
        "GET",
        token
      );

      setSpaces(spaces);
    } catch (error) {
      console.error("Error fetching spaces by category:", error);
      setSpaces([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getSpaces(params.category);
    }
  }, [params.category, token]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className=" ">
      <section className="w-full h-[200px]  relative">
        <div className=" absolute -top-[160px] z-30 w-full px-5   gap-6 flex items-center  ">
          <div className="w-full  flex items-center justify-center h-[300px] rounded-lg overflow-hidden">
            <div className="flex  flex-col items-center mt-20 justify-center w-full">
              <h1 className="text-3xl mt-20 text-center text-white">
                Find your {params.category} spaces on NBG
              </h1>
              <Input
                className="mt-5  max-w-lg"
                labelPlacement="outside"
                placeholder="Search for spaces"
                radius="full"
                size="lg"
                variant="bordered"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="lg:hidden">
        <SpacesMobileTabs />
      </div>
      <div className="pb-20">
        <div>
          <h2 className="text-4xl mb-5 capitalize">{params.category} Spaces</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-3  gap-3 items-center px-1">
            {spaces.length === 0 ? (
              <h2>No Spaces for {params.category} Found</h2>
            ) : (
              spaces.map((space: SpacesInterface) => (
                <SpaceCard
                  key={space.id}
                  banner={
                    space.bannerData
                      ? space.bannerData
                      : "/assets/images/valo.png"
                  }
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySpaces;

"use client";
import { Select, SelectItem } from "@heroui/select";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { filterOptions, gamesList, regions, timelines } from "@/data";

const TournamentFilters = () => {
  // @ts-ignore
  const [timeline, setTimeline] = useState<Selection>(new Set([]));
  // @ts-ignore
  const [region, setRegion] = useState<Selection>(new Set([]));
  // @ts-ignore
  const [gameRegion, setGameRegion] = useState<Selection>(new Set([]));
  // @ts-ignore
  const [game, setGame] = useState<Selection>(new Set([]));
  const [showMoreFilters, setShowMoreFilters] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item != option)
        : [...prev, option]
    );
  };

  return (
    <div className="my-10">
      <div className="flex flex-col lg:flex-row w-full lg:items-center justify-between  gap-2">
        <Select
          className="lg:w-[150px] w-full"
          placeholder="Timeline"
          // @ts-ignore
          selectedKeys={timeline}
          variant="bordered"
          // @ts-ignore
          onSelectionChange={setTimeline}
        >
          {timelines.map((time) => (
            <SelectItem key={time.key}>{time.label}</SelectItem>
          ))}
        </Select>
        <div className="flex gap-2">
          {filterOptions.map((option) => (
            <Button
              key={option}
              fullWidth
              color={selectedOptions.includes(option) ? "primary" : "default"}
              variant={selectedOptions.includes(option) ? "solid" : "bordered"}
              onPress={() => toggleOption(option)}
            >
              {option}
            </Button>
          ))}
        </div>
        <Button onPress={() => setShowMoreFilters((prev) => !prev)}>
          Filters
        </Button>
      </div>
      {showMoreFilters && (
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          {/* Games */}
          <Select
            className="lg:max-w-xs w-full"
            placeholder="Games"
            // @ts-ignore
            selectedKeys={game}
            variant="bordered"
            // @ts-ignore
            onSelectionChange={setGame}
          >
            {gamesList.map((game) => (
              <SelectItem key={game.key}>{game.label}</SelectItem>
            ))}
          </Select>
          {/* server regions */}
          <Select
            className="lg:max-w-xs w-full"
            placeholder="Region"
            // @ts-ignore
            selectedKeys={region}
            variant="bordered"
            // @ts-ignore
            onSelectionChange={setRegion}
          >
            {regions.map((region) => (
              <SelectItem key={region.key}>{region.label}</SelectItem>
            ))}
          </Select>
          {/* Game regions */}
          <Select
            className="lg:max-w-xs w-full"
            placeholder="Game Region"
            // @ts-ignore
            selectedKeys={gameRegion}
            variant="bordered"
            // @ts-ignore
            onSelectionChange={setGameRegion}
          >
            <SelectItem key={"global"}>Global</SelectItem>
          </Select>
          {/* Search */}
          <Input placeholder="Search" variant="bordered" />
        </div>
      )}
    </div>
  );
};

export default TournamentFilters;

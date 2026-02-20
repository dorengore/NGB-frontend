/* eslint-disable jsx-a11y/no-static-element-interactions */
"use client";
import { useState, useRef, MouseEvent } from "react";
import { Check } from "lucide-react";

import TournamentFormat from "./tournament-format";
import TournamentTeams from "./tournament-teams";
import TournamentSettings from "./tournament-settings";

import { tournamentHorizontalScroll } from "@/data/dummy-servers";

const DragScroll = () => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();

    // Only handle horizontal scrolling
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div>
      <div
        ref={sliderRef}
        className={`custom-scrollbar flex overflow-x-auto gap-3 py-6 overflow-y-hidden cursor-grab space-x-4 p-4 ${
          isDown ? "cursor-grabbing" : ""
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {tournamentHorizontalScroll.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0  select-none w-full max-w-[350px] relative pointer-events-none h-28 rounded-lg"
          >
            <div className="w-full select-none relative">
              {index + 1 !== tournamentHorizontalScroll.length && (
                <div className="absolute w-[97%] top-4 -right-6 h-[2px] bg-gray-500" />
              )}
              <div
                className={`size-8 select-none border-2 border-blue-gray-400 ${item.isCompleted && item.isStarted ? "bg-green-600" : "bg-blue-gray-500"} ${item.isStarted && item.isCompleted === false ? "!bg-blue-500" : ""} flex items-center justify-center rounded-full`}
              >
                {item.isCompleted && <Check />}
              </div>
            </div>
            <div
              className={`mt-4 ${item.isCompleted && item.isCompleted ? "text-blue-gray-700" : "text-white"}`}
            >
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-5 mt-5 px-10">
        <TournamentFormat />
        <div className="w-[35%] flex flex-col gap-20">
          <TournamentTeams />
          <TournamentSettings />
        </div>
      </div>
    </div>
  );
};

export default DragScroll;

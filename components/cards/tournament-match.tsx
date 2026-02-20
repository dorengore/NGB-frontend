import { Chip } from "@heroui/chip";
import { UsersIcon } from "lucide-react";

const TournamentMatch = ({ onSelect }: { onSelect: (match: any) => any }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    (<div
      className="flex relative items-center border-t cursor-pointer hover:bg-gray-800/50 transition-all duration-300 bg-gray-900/50 px-6 py-3 w-full "
      onClick={() => onSelect({ match: "1" })}
    >
      <div className="w-[20%] md:block hidden">
        <h2 className="font-bold mb-1">Header</h2>
        <p className="text-white/50 mb-1 text-sm">Unscheduled</p>
        <Chip className="text-[10px]">
          <span className="font-bold">Waiting</span>
        </Chip>
      </div>
      <div className="absolute md:block hidden w-[1px] left-[18%] z-10 h-[85%] bg-blue-gray-300" />
      <div className="md:w-[40%] flex flex-col gap-3 h-full">
        <div className="flex gap-3 items-center">
          <span className="size-8 text-sm p-4 flex items-center justify-center bg-blue-gray-900/80 rounded-full">
            0
          </span>
          <div className="flex items-center gap-3">
            <div className="size-8 text-sm border  flex items-center justify-center border-dashed rounded-full p-2">
              <UsersIcon />
            </div>
            <h2 className="text-sm">To Be Decided</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span className="size-8 text-sm p-4 flex items-center justify-center bg-blue-gray-900/80 rounded-full">
            0
          </span>
          <div className="flex items-center gap-3">
            <div className="size-8 text-sm border  flex items-center justify-center border-dashed rounded-full p-2">
              <UsersIcon />
            </div>
            <h2 className="text-sm">To Be Decided</h2>
          </div>
        </div>
      </div>
      <div className="absolute w-[1px] left-[58%] z-10 h-[85%] bg-blue-gray-300" />
      <div className="w-[40%] text-sm  flex items-center justify-end">
        Footer
      </div>
    </div>)
  );
};

export default TournamentMatch;

import { Input } from "@heroui/input";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  return (
    <Input
      aria-label="Search"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-white dark:text-white/90",
          "placeholder:text-white dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
      }}
      labelPlacement="outside"
      variant="bordered"
      placeholder="Search..."
      radius="full"
      startContent={<SearchIcon color="white" />}
      type="search"
    />
  );
};

export default SearchInput;

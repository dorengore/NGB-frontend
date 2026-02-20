import { Spinner } from "@heroui/spinner";

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Spinner label="Loading..." />
    </div>
  );
};

export default Loading;

import { Spinner } from "@heroui/spinner";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner label="Loading..." size="lg" />
    </div>
  );
};

export default LoadingSpinner;

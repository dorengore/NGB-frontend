import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallBack = useRef(callback);

  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallBack.current();
    };

    if (delay !== null) {
      tick();

      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;

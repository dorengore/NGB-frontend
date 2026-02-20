"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ItemsSlider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateStateOnResize = () => {
      if (!carouselRef.current) return;
      const { scrollWidth, offsetWidth } = carouselRef.current;

      setWidth(() => scrollWidth - offsetWidth);
    };

    updateStateOnResize();

    window.addEventListener("resize", updateStateOnResize);

    return () => window.removeEventListener("resize", updateStateOnResize);
  }, []);

  return (
    <main className="flex lg:hidden items-center justify-center   ">
      <motion.div
        ref={carouselRef}
        animate={{ opacity: 1 }}
        className="  cursor-grab overflow-hidden w-full"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {/* "key" prop will re-render the element when update the state "width", preventing dragConstraints bug */}
        <motion.div
          key={width}
          className="flex gap-5 laptop:space-x-12 mobile:space-x-6"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {children}
        </motion.div>
      </motion.div>
    </main>
  );
};

export default ItemsSlider;

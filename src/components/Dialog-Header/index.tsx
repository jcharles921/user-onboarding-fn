import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { RootState } from "@/store/types";

const DialogHeader = () => {
  const { pages } = useSelector((state: RootState) => state.steps);
  const [animatedPages, setAnimatedPages] = useState(0);

  useEffect(() => {
    setAnimatedPages(0);
    const timer = setTimeout(() => {
      setAnimatedPages(pages);
    }, 50);
    return () => clearTimeout(timer);
  }, [pages]);

  return (
    <div className="flex flex-col items-start p-4 bg-gray-100">
      <div className="flex items-center mb-4">
        <TrendingUpOutlinedIcon className="mr-2" />
        <span className="text-lg font-semibold">Page {pages}</span>
      </div>
      <div className="flex w-full">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="h-2 flex-1 mx-0.5 bg-gray-300 rounded overflow-hidden"
          >
            <div
              className="h-full bg-purple-800 transition-all duration-500 ease-out"
              style={{ width: index <= animatedPages ? "100%" : "0%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialogHeader;

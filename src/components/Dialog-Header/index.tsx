import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { RootState } from "@/store/types";
import style from "../../styles/navigation.module.css";
import { StepsEnum } from "@/constants";

const DialogHeader = () => {
  const { pages } = useSelector((state: RootState) => state.steps);
  const [animatedPages, setAnimatedPages] = useState(StepsEnum.Start);

  useEffect(() => {
    setAnimatedPages(StepsEnum.Start);
    const timer = setTimeout(() => {
      setAnimatedPages(pages);
    }, 50);
    return () => clearTimeout(timer);
  }, [pages]);

  const getLineColor = (index: number) => {
    if (index === animatedPages) return "#D0BAFD"; 
    if (index < animatedPages) return "#6B44C9"; 
    if (index === animatedPages + 1) return "#A9A9A9"; 
    return "#ECECF1"; 
  };

  return (
    <div className={style.hearderBox}>
      <div className="flex items-center mb-4">
        <TrendingUpOutlinedIcon className="my-4 ml-8 text-purple" />
      </div>
      {pages === StepsEnum.Start && (
        <hr className="w-full border-[0.5px] border-[#E5E5E9] absolute bottom-0 " />
      )}
      {pages !== StepsEnum.Start && (
        <div className="flex w-full">
          {[...Array(8)].map((_, index) => (
            <div key={index} className={style.lineStep}>
              <div
                className="h-full transition-all duration-500 ease-out"
                style={{
                  width: index <= animatedPages ? "100%" : "0%",
                  backgroundColor: getLineColor(index),
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DialogHeader;

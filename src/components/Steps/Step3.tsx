import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  AppDispatch } from "@/store/types";
import { BigText } from "../Text";
import { nextStep } from "@/store/reducer/steps";
import { setUpUserData } from "@/store/reducer/onboardingData";
import style from "../../styles/steps.module.css";

const Step3 = () => {
  const dispatch = useDispatch<AppDispatch>();
 // Assuming target audience data

 const targetAudience = [
  { name: "Business (B2B)" },
  { name: "Consumers (B2C)" },
  { name: "Business and Consumers" },
];

  const handleTargetAudienceClick = (targetAudience: string) => {
    if (targetAudience) {
      dispatch(setUpUserData({ targetAudience }));
      dispatch(nextStep(1)); // Move to the next step
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-10">
      <BigText
        text="Who is your target audience?"
        className={`${style.rTitle} font-semibold mt-9 `}
      />
      <div className={style.gridContainer}>
        {targetAudience?.map((audience: any, index: number) => (
          <div
            key={index}
            className={style.gridItem}
            onClick={() => handleTargetAudienceClick(audience?.name)}
          >
            {audience?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;

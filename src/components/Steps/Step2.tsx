import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/types";
import { BigText } from "../Text";
import { nextStep } from "@/store/reducer/steps";
import { setUpUserData } from "@/store/reducer/onboardingData";
import style from "../../styles/steps.module.css";


const Step2 = () => {
  const dispatch = useDispatch<AppDispatch>();

  const companySizes = [
    { name: "Myself only" },
    { name: "2-10 employees" },
    { name: "11-50 employees" },
    { name: "51-200 employees" },
    { name: "201-500 employees" },
    { name: "501-1000 employees" },
    { name: "1001-5000 employees" },
    { name: "5001-10,000 employees" },
    { name: "10,000+ employees" },
  ];
  

  const handleCompanySizeClick = (companySize: string) => {
    if (companySize) {
      dispatch(setUpUserData({ companySize }));
      dispatch(nextStep(1)); // Move to the next step
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-10">
      <BigText
        text="What is your company size?"
        className={`${style.rTitle} font-semibold mt-9 `}
      />
      <div className={style.gridContainer}>
        {companySizes?.map((companySize: any, index: number) => (
          <div
            key={index}
            className={style.gridItem}
            onClick={() => handleCompanySizeClick(companySize?.name)}
          >
            {companySize?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/types";
import { BigText } from "../Text";
import { nextStep } from "@/store/reducer/steps";
import { setUpUserData } from "@/store/reducer/onboardingData";
import Loader from "../Loader";
import style from "../../styles/steps.module.css";
import apis from "@/store/api";

const Step1 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector(
    (state: RootState) => state.responsibilities
  );

  useEffect(() => {
    dispatch(apis.responsibilities());
  }, [dispatch]);

  const handleResponsibilityClick = (responsibility: string) => {
    if (responsibility) {
      dispatch(setUpUserData({ responsibility }));
      dispatch(nextStep(1));
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-10">
      <BigText
        text="What is your main work responsibility?"
        className={`${style.rTitle} font-semibold mt-9 `}
      />
      {loading && <Loader marginTop={20} />}
      <div className={style.gridContainer}>
        {data?.map((responsibility: any, index: number) => (
          <div
            key={index}
            className={style.gridItem}
            onClick={() => handleResponsibilityClick(responsibility?.name)}
          >
            {responsibility?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step1;

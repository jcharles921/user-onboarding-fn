import React from "react";
import style from "../../styles/steps.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/types";
import { MainButton } from "../Button";
import { BigText, NormalText, SmallText } from "../Text";
import { StepsEnum } from "@/constants";
import { nextStep } from "@/store/reducer/steps";

const Start = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pages } = useSelector((state: RootState) => state.steps);

  const handleNext = () => {
    if (pages < StepsEnum.Step7) {
      dispatch(nextStep(1));
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="mt-16  w-[8.75rem] h-[8.75rem] rounded-full bg-purple text-white flex items-center justify-center ">
        <BigText text="J" className="font-extrabold text-[74px]" />
      </div>
      <div className="flex gap-1 items-center  ">
        <BigText
          text="Welcome Jane Doe 🙌"
          className={`mt-8 text-center font-semibold ${style.rTitle}`}
        />
      </div>
      <NormalText
        text="We need a few details to personalize your experience. "
        className="my-8 text-center"
      />
      <MainButton
        width={420}
        variant="contained"
        className="mt-6"
        onClick={handleNext}
      >
        <NormalText text="Let’s do it" className="font-medium" />
      </MainButton>
      <div className="flex gap-1 mt-4">
        <SmallText
          text="This will only take a minute."
          className={`text-[#686868] ${style.rSmall}`}
        />
      </div>
    </div>
  );
};

export default Start;

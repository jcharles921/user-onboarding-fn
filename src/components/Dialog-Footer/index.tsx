import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/types";
import { nextStep, prevStep } from "@/store/reducer/steps";
import { NormalText, MediumText } from "../Text";
import { MainButton } from "../Button";
import style from "../../styles/navigation.module.css";
import { StepsEnum } from "@/constants";

const DialogFooter = () => {
  const { pages } = useSelector((state: RootState) => state.steps);
  const dispatch = useDispatch<AppDispatch>();

  const handleNext = () => {
    if (pages < StepsEnum.Step7) {
      dispatch(nextStep(1));
    }
  };

  const handleSkip = () => {
    if (pages < StepsEnum.Step7) {
      dispatch(nextStep(2));
    }
  };

  const handlePrevious = () => {
    if (pages > StepsEnum.Start) {
      dispatch(prevStep(1));
    }
  };

  return (
    <div className={style.footerBox}>
      <hr className={style.footerLine} />
      <div className="flex items-center gap-2 justify-between w-full px-8">
        <MediumText
          onClick={handlePrevious}
          text="Back"
          className="text-purple ml-8"
        />
        <div className="flex gap-4 items-center justify-between">
          <MediumText
            text="Skip"
            onClick={handleSkip}
            className="text-purple mr-3"
          />
          <MainButton variant="contained">
            <NormalText text="Next" onClick={handleNext} />
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default DialogFooter;

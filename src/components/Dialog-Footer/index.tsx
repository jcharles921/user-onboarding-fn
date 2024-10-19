import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/types";
import { nextStep, prevStep } from "@/store/reducer/steps";
import { setUpUserData } from "@/store/reducer/onboardingData";
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
      // If it's Step 5, reset productInterest
      if (pages === StepsEnum.Step5) {
        dispatch(setUpUserData({ productInterest: [] }));
      }
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
          className="text-purple ml-8 cursor-pointer"
        />
        <div className="flex gap-4 items-center justify-between">
          {/* Conditionally render the "Skip" button, hide on Step 5 */}
          {(pages !== StepsEnum.Step4 && pages !== StepsEnum.Step5) && (
            <MediumText
              text="Skip"
              onClick={handleSkip}
              className="text-purple mr-3 cursor-pointer"
            />
          )}
          {/* Conditionally render the "Next" button for steps 5, 6, and 7 */}
          {(pages === StepsEnum.Step5 || pages === StepsEnum.Step6 || pages === StepsEnum.Step7) && (
            <MainButton variant="contained">
              <NormalText text="Next" onClick={handleNext} />
            </MainButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogFooter;

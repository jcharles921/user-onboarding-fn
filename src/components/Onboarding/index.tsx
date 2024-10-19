import React from "react";
import { RootState } from "@/store/types";
import { useSelector } from "react-redux";
import DialogHeader from "../Dialog-Header";
import DialogFooter from "../Dialog-Footer";
import { Start, Step1, Step2, Step3, Step4, Step5, Step6, Step7 } from "../Steps";
import { StepsEnum } from "@/constants"; 

const Onboarding = () => {
  const { pages } = useSelector((state: RootState) => state.steps);
  
  return (
    <div>
      <DialogHeader />
      {pages === StepsEnum.Start && <Start />}
      {pages === StepsEnum.Step1 && <Step1 />}
      {pages === StepsEnum.Step2 && <Step2 />}
      {pages === StepsEnum.Step3 && <Step3 />}
      {pages === StepsEnum.Step4 && <Step4 />}
      {pages === StepsEnum.Step5 && <Step5 />}
      {pages === StepsEnum.Step6 && <Step6 />}
      {pages === StepsEnum.Step7 && <Step7 />}
      {pages !== StepsEnum.Start && <DialogFooter />}
    </div>
  );
};

export default Onboarding;

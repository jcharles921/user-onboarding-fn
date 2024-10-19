import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OnboardingInfo } from "../types";
const onboardingData = createSlice({
  name: "onboardingInfo",
  initialState: {
    responsibility: "",
    companySize: "",
    targetAudience: "",
    productInterest: [],
    product: [],
    profileImage: "",
    profileColor: "",
    headline: "",
    jobTitle: "",
    location: "",
  } as OnboardingInfo,
  reducers: {
    setUpUserData: (state, action: PayloadAction<any>) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { setUpUserData } = onboardingData.actions;
export default onboardingData.reducer;

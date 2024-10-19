import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const steps = createSlice({
  name: "steps",
  initialState: {
    pages: 1,
  } as { pages: number },
  reducers: {
    nextStep: (state, action: PayloadAction<number>) => {
      state.pages = Math.min(action.payload, 8);
    },
    prevStep: (state, action: PayloadAction<number>) => {
      state.pages = Math.max(action.payload, 1);
    },
    resetSteps: (state) => {
      state.pages = 1;
    },
  },
});

export const { nextStep, prevStep, resetSteps } = steps.actions;
export default steps.reducer;

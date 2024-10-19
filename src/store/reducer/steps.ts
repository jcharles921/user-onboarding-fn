import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const steps = createSlice({
  name: "steps",
  initialState: {
    pages: 0,
  } as { pages: number },
  reducers: {
    nextStep: (state, action: PayloadAction<number>) => {
      state.pages = Math.min(state.pages + action.payload, 7); // Increment based on current state
    },
    prevStep: (state, action: PayloadAction<number>) => {
      state.pages = Math.max(state.pages - action.payload, 0); // Decrement based on current state
    },
    resetSteps: (state) => {
      state.pages = 0;  // Reset to initial state
    },
  },
});

export const { nextStep, prevStep, resetSteps } = steps.actions;
export default steps.reducer;

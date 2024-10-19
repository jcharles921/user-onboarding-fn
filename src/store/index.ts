import { configureStore } from "@reduxjs/toolkit";
import responsibilities from "./reducer/responsibilities";
import product from "./reducer/product";
import productsTags from "./reducer/productsTags";
import steps from "./reducer/steps";
import onboardingData from "./reducer/onboardingData";

const store = configureStore({
  reducer: {
    responsibilities,
    product,
    productsTags,
    steps,
    onboardingData,
  },
});

export default store;

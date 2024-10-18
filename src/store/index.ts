import { configureStore } from "@reduxjs/toolkit";
import responsibilities from "./reducer/responsibilities";
import product from "./reducer/product";
import productsTags from "./reducer/productsTags";

const store = configureStore({
  reducer: {
    responsibilities,
    product,
    productsTags,
  },
});

export default store;

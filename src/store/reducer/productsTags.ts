// store/reducers/products.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../api";

const productsTagsSlice = createSlice({
  name: "productsTags",
  initialState: {
    data: [],
    loading: false,
    error: false,
    message: "",
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apis.productTags.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(apis.productTags.fulfilled, (state, action: PayloadAction<[]>) => {
        state.loading = false;
        state.success = true;
        state.error = false;
        state.data = action.payload;

      })
      .addCase(apis.productTags.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.message = action.payload?.error || "Something went wrong";
      })
      .addCase(apis.resetAll, (state) => {
        state.loading = false;
        state.error = false;
        state.success = false;
        state.data = [];
      });
  },
});

export default productsTagsSlice.reducer;

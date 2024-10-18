// store/reducers/responsibilities.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../api";

const responsibilitiesSlice = createSlice({
  name: "responsibilities",
  initialState: {
    data: [],
    loading: false,
    error: false,
    success: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apis.responsibilities.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(
        apis.responsibilities.fulfilled,
        (state, action: PayloadAction<[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.success = true;
          state.error = false;
        }
      )
      .addCase(
        apis.responsibilities.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = true;
          state.message = action.payload?.error || "Something went wrong";
          state.success = false;
        }
      );
  },
});

export default responsibilitiesSlice.reducer;

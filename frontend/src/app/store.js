import { configureStore } from "@reduxjs/toolkit";

import homepageSlice from "../features/pages/homepage/homepageSlice";

export const store = configureStore({
  reducer: {
    [homepageSlice.name]: homepageSlice.reducer,
  },
});
import { configureStore } from "@reduxjs/toolkit";

import homepageSlice from "../features/pages/homepage/homepageSlice";
import navbarSlice from "../features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    [homepageSlice.name]: homepageSlice.reducer,
    [navbarSlice.name]: navbarSlice.reducer,
  },
});
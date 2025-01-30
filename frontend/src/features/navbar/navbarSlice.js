import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    navButtons: [
      { "display": "Home",   "redirect": "/"       },
      { "display": "Resume", "redirect": "/resume" },
    ],
  },
  reducers: {

  },
});
export default navbarSlice;

/**
 * Return all button redirects that are stored
 * in the state
 */
export function getNavBarButtons(state) {
  return state.navbar.navButtons;
}
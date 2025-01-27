import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { getNavBarButtons } from "./navbarSlice";

function NavButton(props) {
  const navigate = useNavigate();
  return (
    <button
      className="bg-violet-800 h-12"
      onClick={() => navigate(props.info.redirect)}
    >
      <p className="mx-4">{props.info.display}</p>
    </button>
  );
}
NavButton.propTypes = {
  info: PropTypes.shape({
    display: PropTypes.string,
    redirect: PropTypes.string,
  }).isRequired,
};

export function NavBar() {
  const navButtons = useSelector(getNavBarButtons);
  return (
    <div className="max-w-full bg-purple-700">
      <div>
        {Object.keys(navButtons).map((key) => (
          <NavButton key={key} info={navButtons[key]}/>
        ))}
      </div>
    </div>
  );
}
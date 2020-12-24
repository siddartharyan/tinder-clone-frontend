import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Tinder-512.png"
        alt="tinder-image"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;

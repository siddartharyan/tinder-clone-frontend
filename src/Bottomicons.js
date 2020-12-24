import React from "react";
import "./Bottomicons.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
function Bottomicons() {
  return (
    <div className="bottom_container">
      <IconButton className="cover">
        <ReplayIcon
          className="button"
          style={{ color: "yellow" }}
          fontSize="large"
        />
      </IconButton>
      <IconButton className="cover">
        <CloseRoundedIcon
          className="button"
          fontSize="large"
          style={{ color: "red" }}
        />
      </IconButton>
      <IconButton className="cover">
        <StarRateRoundedIcon
          className="button"
          fontSize="large"
          style={{ color: "blue" }}
        />
      </IconButton>
      <IconButton className="cover">
        <FavoriteRoundedIcon
          className="button"
          fontSize="large"
          style={{ color: "#00bfff" }}
        />
      </IconButton>
      <IconButton className="cover">
        <FlashOnRoundedIcon
          className="button"
          fontSize="large"
          style={{ color: "green" }}
        />
      </IconButton>
    </div>
  );
}
export default Bottomicons;

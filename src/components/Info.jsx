import React from "react";
import { useParams } from "react-router-dom";
import Player from "./Player.jsx";
import Invalid from "./Invalid.jsx";

const Info = () => {
  const { playerId } = useParams();

  return (
    <div>
      {playerId !== "null" ? <Player playerId={playerId} /> : <Invalid />}
    </div>
  );
};

export default Info;

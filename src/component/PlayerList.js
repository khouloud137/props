import React from "react";
import Player from "../component/Player";
import { players } from "../players";
function PlayerList() {
  return (
    <div className="players">
      {players.map((playerData) => (
        <Player key={playerData.id} {...playerData} />
      ))}
    </div>
  );
}

export default PlayerList;

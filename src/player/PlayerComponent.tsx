import * as React from 'react';
import {Player} from "../app/Types";
import "./PlayerComponent.css";

export interface PlayerProps {
  player: Player;
}

export class PlayerComponent extends React.Component<PlayerProps> {
  render() {
    const player: Player = this.props.player;
    return (
        <div className="player-container">
          <label className="player-name">{player.name}</label>
          <label className="player-skills">{player.overall} - {player.typ}</label>
        </div>
    );
  }
}
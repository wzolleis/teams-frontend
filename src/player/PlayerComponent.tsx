import * as React from 'react';
import {Player} from "../app/Types";

export interface PlayerProps {
  player: Player;
}

export class PlayerComponent extends React.Component<PlayerProps> {
  render() {
    return (
        <div>
          {this.props.player.name} - {this.props.player.overall}
        </div>
    );
  }
}
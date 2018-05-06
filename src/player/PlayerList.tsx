import * as React from "react";
import {Player} from "../app/Types";
import {PlayerComponent} from "./PlayerComponent";

type PlayerListProps = {
    players: Player[]
};

export class PlayerList extends React.Component<PlayerListProps> {
    render() {
        const items: React.ReactFragment = this.props.players.map((player) => {
            return (
                <li className="list-group-item" key={player.id}>
                    <PlayerComponent player={player}/>
                </li>
            );
        });

        return (
            <div className="dual-list list-left">
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        );
    }
}

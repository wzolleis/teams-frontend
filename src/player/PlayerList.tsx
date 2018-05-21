import * as React from "react";
import {Player} from "../app/Types";

type PlayerListProps = {
    players: Player[]
};

export class PlayerList extends React.Component<PlayerListProps> {
    render() {
        const items: React.ReactFragment = this.props.players.map((player) => {
            return (
                <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.overall}</td>
                    <td>{player.typ}</td>
                    <td>{player.skills.speed}</td>
                    <td>{player.skills.technik}</td>
                    <td>{player.skills.condition}</td>
                </tr>
            );
        });

        return (
            <div className="container">
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gesamt</th>
                        <th>Typ</th>
                        <th>Speed</th>
                        <th>Technik</th>
                        <th>Kondition</th>
                    </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}

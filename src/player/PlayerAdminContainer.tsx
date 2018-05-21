import * as React from "react";
import {connect} from "react-redux";
import {State, Player} from "../app/Types";
import {Dispatch} from "redux";
import {addPlayer, loadPlayerData} from "./PlayerActions";
import {PlayerList} from "./PlayerList";
import "./PlayerAdminContainer.css";

export interface PlayerAdminContainerProps {
    players: Player[];
}

interface PlayerDispatch {
    onAddPlayer: (player: Player) => void;
    onLoadPlayerData: () => void;

}

class AdminContainer extends React.Component<PlayerAdminContainerProps & PlayerDispatch> {
    componentDidMount() {
        this.props.onLoadPlayerData();
    }

    render() {
        return (
            <div className="playerAdminContainer">
                <div className="playerAdminHeader title text-center">
                    Spielerverwaltung
                </div>
                <p/>
                <PlayerList className="playerTable table table-hover table-striped table-bordered" players={this.props.players}/>
                <span className="playerButtonContainer">
                    <a href="/admin/addPlayer" className="addPlayerButton btn btn-primary">Add</a>
                </span>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): PlayerDispatch => ({
    onAddPlayer: (player: Player) => dispatch(addPlayer.started({player})),
    onLoadPlayerData: () => loadPlayerData(dispatch)

});

const mapStateToProps = (state: State): PlayerAdminContainerProps => {
    return {
        players: state.players
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);   
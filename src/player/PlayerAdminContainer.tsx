import * as React from "react";
import {connect} from "react-redux";
import {State, Player} from "../app/Types";
import {Dispatch} from "redux";
import {addPlayer, loadPlayerData} from "./PlayerActions";
import {PlayerList} from "./PlayerList";

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
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading c-list">
                        <span className="title centered">Spielerverwaltung</span>
                    </div>
                    <PlayerList players={this.props.players}/>
                    <p/>
                    <span className="submit-btn">
                        <button className="btn btn-primary">Speichern</button>
                    </span>
                </div>
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
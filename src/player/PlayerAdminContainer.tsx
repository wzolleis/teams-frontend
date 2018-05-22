import * as React from "react";
import {connect} from "react-redux";
import {State, Player} from "../app/Types";
import {Dispatch} from "redux";
import {loadAllPlayers} from "./PlayerActions";
import {PlayerList} from "./PlayerList";
import "./PlayerAdminContainer.css";
import {RouteComponentProps, withRouter} from "react-router";

export interface PlayerAdminContainerProps {
    players: Player[];
}

interface PlayerDispatch {
    onLoadPlayerData: () => void;

}

interface PlayerAdminContainerPathParams {

};

class AdminContainer extends React.Component<PlayerAdminContainerProps
    & PlayerDispatch
    & RouteComponentProps<PlayerAdminContainerPathParams>> {
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
                <PlayerList onClick={(event, player) => this.handlePlayerSelected(event, player)}
                            className="playerTable table table-hover table-striped table-bordered"
                            players={this.props.players}/>
                <span className="playerButtonContainer">
                    <a href="/admin/addPlayer" className="addPlayerButton btn btn-primary">Add</a>
                </span>
            </div>
        );
    }

    handlePlayerSelected(event: Event, player: Player) {
        this.props.history.push(`/admin/player/${player.id}`);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): PlayerDispatch => ({
    onLoadPlayerData: () => loadAllPlayers(dispatch)

});

const mapStateToProps = (state: State): PlayerAdminContainerProps => {
    return {
        players: state.players
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminContainer));
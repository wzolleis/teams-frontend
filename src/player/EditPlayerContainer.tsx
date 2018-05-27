import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {PlayerDetailsComponent} from "./PlayerDetailsComponent";
import {Player, State} from "../app/Types";
import {loadPlayer} from "./PlayerActions";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type EditPlayerContainerProps = {
    player: Player
};

type EditPlayerDispatch = {
    onLoadPlayer: (id: number) => void;
};

type EditPlayerContainerPathParam = {
    playerId: number
}

class EditPlayerContainer extends React.Component<
    EditPlayerContainerProps
    & EditPlayerDispatch
    & RouteComponentProps<EditPlayerContainerPathParam>> {

    componentDidMount() {
        const {match: {params}} = this.props; // id path param in url
        this.props.onLoadPlayer(params.playerId);

    }

    render() {
        return (
            <PlayerDetailsComponent player={this.props.player} handleSubmit={this.updatePlayer}/>
        )
    }

    updatePlayer = (player: Player): void => {
        console.log('update: ', player);
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): EditPlayerDispatch => ({
    onLoadPlayer: (id: number) => loadPlayer(dispatch, id)

});

const mapStateToProps = (state: State): EditPlayerContainerProps => {
    const player: Player = state.selectedPlayer;
    return {
        player
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPlayerContainer));
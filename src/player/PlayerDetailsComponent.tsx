import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {loadPlayer} from "./PlayerActions";
import {Player, State} from "../app/Types";
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface PlayerDetailsComponentProps {
    player?: Player
}

interface PlayerDetailsDispatch {
    onLoadPlayer: (id: number) => void;

}

interface PlayerDetailsPathParams {
    playerId: number;
}

class PlayerDetailsComponent extends React.Component<
    RouteComponentProps<PlayerDetailsPathParams>
    & PlayerDetailsDispatch
    & PlayerDetailsComponentProps> {

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.onLoadPlayer(params.playerId);
    }

    render() {
        // extract match from props, then extract params from match
        const name: string = this.props.player ? this.props.player.name : "undefined";
        return (
                <div>Hello {name}</div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): PlayerDetailsDispatch => ({
    onLoadPlayer: (id: number) => loadPlayer(dispatch, id)

});

const mapStateToProps = (state: State): PlayerDetailsComponentProps => {
    return {
        player: state.selectedPlayer
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerDetailsComponent));
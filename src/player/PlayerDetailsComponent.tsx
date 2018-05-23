import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {loadPlayer} from "./PlayerActions";
import {Player,  State} from "../app/Types";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type PlayerDetailsComponentProps = {
    player: Player
}

type PlayerDetailsDispatch = {
    onLoadPlayer: (id: number) => void;

}

type PlayerDetailsPathParams = {
    playerId: number;
}

type PlayerFormState = {
    name: string
}

class PlayerDetailsComponent extends React.Component<
    RouteComponentProps<PlayerDetailsPathParams>
    & PlayerDetailsDispatch
    & PlayerDetailsComponentProps, PlayerFormState> {

    state = {
        name: "",
    };

    componentDidMount() {
        const { match: { params } } = this.props; // id path param in url
        this.props.onLoadPlayer(params.playerId);

    }

    componentWillReceiveProps(nextProps: PlayerDetailsComponentProps){
        if(nextProps.player.name !== this.props.player.name){
            this.setState({name:nextProps.player.name});
        }
    }

    render() {
        return (
        <form className="container gridcontainer form-horizontal">
            <h3 className="text-center grid-form-header">{this.props.player.name}</h3>
            <label className="control-label grid-form-label" htmlFor="name">Name</label>
            <input
                value={this.state.name}
                onChange={this.handlePlayerNameChange}
                id="name"
                name="Name"
                type="text"
                placeholder="Name"
                className="form-control grid-form-input"
            />

        </form>
        )
    }

    handlePlayerNameChange = (event: any) => {
       this.setState({
           ...this.state,
           name: event.target.value
       });
    };
}

const mapDispatchToProps = (dispatch: Dispatch<State>): PlayerDetailsDispatch => ({
    onLoadPlayer: (id: number) => loadPlayer(dispatch, id)

});

const mapStateToProps = (state: State): PlayerDetailsComponentProps => {
    const player: Player = state.selectedPlayer;
    return {
        player
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlayerDetailsComponent));
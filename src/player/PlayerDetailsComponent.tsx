import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {loadPlayer} from "./PlayerActions";
import {Player, State} from "../app/Types";
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
    name: string,
    typ: string,
    overall: number,
    speed: number,
    technik: number,
    condition: number
}

class PlayerDetailsComponent extends React.Component<RouteComponentProps<PlayerDetailsPathParams>
    & PlayerDetailsDispatch
    & PlayerDetailsComponentProps, PlayerFormState> {

    state = {
        name: "",
        typ: "",
        overall: 0,
        speed: 0,
        technik: 0,
        condition: 0
    };

    componentDidMount() {
        const {match: {params}} = this.props; // id path param in url
        this.props.onLoadPlayer(params.playerId);

    }

    componentWillReceiveProps(nextProps: PlayerDetailsComponentProps) {
        if (nextProps.player.name !== this.props.player.name) {
            this.setState({
                name: nextProps.player.name,
                typ: nextProps.player.typ,
                overall: nextProps.player.overall,
                speed: nextProps.player.skills.speed,
                technik: nextProps.player.skills.technik,
                condition: nextProps.player.skills.condition
            });
        }
    }

    render() {
        return (
            <form className="container gridcontainer form-horizontal">
                <h3 className="text-center grid-form-header">{this.props.player.name}</h3>
                <label className="control-label grid-form-label" htmlFor="name">Name</label>
                <input
                    value={this.state.name}
                    onChange={event => this.handlePlayerNameChange(event)}
                    id="name"
                    name="Name"
                    type="text"
                    placeholder="Name"
                    className="form-control grid-form-input"
                />

                <label className="control-label grid-form-label" htmlFor="typ">Typ</label>
                <input
                    value={this.state.typ}
                    onChange={event => this.handleTypChange(event)}
                    id="typ"
                    name="Typ"
                    type="text"
                    placeholder="Typ"
                    className="form-control grid-form-input"
                />

                <label className="control-label grid-form-label" htmlFor="overall">Gesamt</label>
                <input
                    value={this.state.overall}
                    onChange={event => this.handleOverallChange(event)}
                    id="typ"
                    name="overall"
                    type="number"
                    placeholder="Gesamt"
                    className="form-control grid-form-input"
                />

                <label className="control-label grid-form-label" htmlFor="speed">Geschwindigkeit</label>
                <input
                    value={this.state.overall}
                    onChange={event => this.handleSpeedChange(event)}
                    id="speed"
                    name="speed"
                    type="number"
                    placeholder="Geschwindigkeit"
                    className="form-control grid-form-input"
                />

                <label className="control-label grid-form-label" htmlFor="technik">Technik</label>
                <input
                    value={this.state.overall}
                    onChange={event => this.handleTechnikChange(event)}
                    id="technik"
                    name="technik"
                    type="number"
                    placeholder="Technik"
                    className="form-control grid-form-input"
                />

                <label className="control-label grid-form-label" htmlFor="Kondition">Kondition</label>
                <input
                    value={this.state.overall}
                    onChange={event => this.handleConditionChange(event)}
                    id="condition"
                    name="condition"
                    type="number"
                    placeholder="Kondition"
                    className="form-control grid-form-input"
                />
            </form>
        );
    }

    handlePlayerNameChange = (event: any) => {
        this.setState({
            ...this.state,
            name: event.target.value
        });
    };

    handleTypChange = (event: any) => {
        this.setState({
            ...this.state,
            typ: event.target.value
        });


    };

    handleOverallChange = (event: any) => {
        this.setState({
            ...this.state,
            overall: event.target.value
        });
    };

    handleSpeedChange = (event: any) => {
        this.setState({
            ...this.state,
            speed: event.target.value
        });
    };

    handleTechnikChange = (event: any) => {
        this.setState({
            ...this.state,
            technik: event.target.value
        });
    };

    handleConditionChange = (event: any) => {
        this.setState({
            ...this.state,
            condition: event.target.value
        });
    }
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
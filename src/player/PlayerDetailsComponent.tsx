import * as React from "react";
import {Player} from "../app/Types";
import "./PlayerDetailsComponent.css";


type PlayerDetailsComponentProps = {
    player: Player,
    handleSubmit: (player: Player) => void
}

type PlayerFormState = {
    name: string,
    typ: string,
    overall: number,
    speed: number,
    technik: number,
    condition: number
}

export class PlayerDetailsComponent extends React.Component<PlayerDetailsComponentProps, PlayerFormState>
{
    state = {
        name: "",
        typ: "",
        overall: 0,
        speed: 0,
        technik: 0,
        condition: 0
    };

    componentDidMount() {
        this.setState({
            name: this.props.player.name,
            typ: this.props.player.typ,
            overall:this.props.player.overall,
            speed: this.props.player.skills.speed,
            technik: this.props.player.skills.technik,
            condition: this.props.player.skills.condition
        });
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
            <form className="container gridcontainer form-horizontal" onSubmit={this.onSubmit}>
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

                <button className="btn btn-primary playerSubmitButton" onClick={this.onSubmit}>Speichern</button>
            </form>
        );
    }

    handlePlayerNameChange = (event: any) => {
        if (event.target.id === 'name') {
            this.setState({
                ...this.state,
                name: event.target.value
            });
        }
    };

    handleTypChange = (event: any) => {
        if (event.target.id === 'typ') {
            this.setState({
                ...this.state,
                typ: event.target.value
            });
        }

    };

    handleOverallChange = (event: any) => {
        if (event.target.id === 'overall') {
            this.setState({
                ...this.state,
                overall: this.parseInt(event.target.value)
            });
        }
    };

    handleSpeedChange = (event: any) => {
        if (event.target.id === 'speed') {
            this.setState({
                ...this.state,
                speed: this.parseInt(event.target.value)
            });
        }
    };

    handleTechnikChange = (event: any) => {
        if (event.target.id === 'technik') {
            this.setState({
                ...this.state,
                technik: this.parseInt(event.target.value)
            });
        }
    };

    handleConditionChange = (event: any) => {
        if (event.target.id === 'condition') {
            this.setState({
                ...this.state,
                condition: this.parseInt(event.target.value)
            });
        }
    };

    parseInt = (value: string): number => {
        return parseInt(value, 10);
    };

    onSubmit = () =>  {
        const player: Player = {
            name: this.state.name,
            overall: this.state.overall,
            typ: this.state.typ,
            skills: {
                speed: this.state.speed,
                technik: this.state.technik,
                condition: this.state.condition
            }
        };
        this.props.handleSubmit(player);
    }
}
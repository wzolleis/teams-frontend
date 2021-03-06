import * as React from "react";
import {Player, State} from "../app/Types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import "./AddPlayer.css";
import {DEFAULT_PLAYER} from "../app/RootReducer";

type AddPlayerProps = {
    player: Player,
}

type AddPlayerState = {
    name: string,
    overall: number,
}

type ChangeEvent = {
    target: {
        id: string,
        value: string
    }
}

interface AddPlayerDispatch {
    onHandleChange: (player: Player) => void;
}

class AddPlayerComponent extends React.Component<AddPlayerProps & AddPlayerDispatch, AddPlayerState> {
    state = {
        name: "",
        overall: 100
    };

    handleChange = (event: ChangeEvent) => {
        const id: string = event.target.id;
        const value: string = event.target.value;

        if (id === "name") {
            this.setState(
                {
                    ...this.state,
                    name: value
                });
        }
        else if (id === "skills_overall") {
            this.setState(
                {
                    ...this.state,
                    overall: parseInt(value)
                });
        }
    };

    render() {
        return (
            <div>
                <form className="container gridcontainer form-horizontal">
                    <h3 className="text-center grid-form-header">Neuer Spieler</h3>
                    <label className="control-label grid-form-label" htmlFor="name">Name</label>
                    <input
                        value={this.state.name}
                        onChange={this.handleChange}
                        id="name"
                        name="Name"
                        type="text"
                        placeholder="Name eingeben"
                        className="form-control grid-form-input"
                    />
                    <label className="control-label grid-form-label" htmlFor="skill_overall">Gesamt</label>
                    <select
                        value={this.state.overall}
                        onChange={this.handleChange}
                        id="skill_overall"
                        name="skill_overall"
                        className="form-control grid-form-input"
                    >
                        <option value="100">Voll krass</option>
                        <option value="70">Ganz gut</option>
                        <option value="50">brauchbar</option>
                    </select>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch): AddPlayerDispatch => ({
    onHandleChange: (player: Player) => console.log(player)
});

const mapStateToProps = (_: State): AddPlayerProps => {
    return {
        player: DEFAULT_PLAYER
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayerComponent);

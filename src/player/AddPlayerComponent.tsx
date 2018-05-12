import * as React from "react";
import {Player, State} from "../app/Types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import "./AddPlayer.css";

type AddPlayerProps = {
    player: Player,
}

type AddPlayerState = {
    name: string,
    overall: number,
}

interface AddPlayerDispatch {
    onHandleChange: (player: Player) => void;
}

class AddPlayerComponent extends React.Component<AddPlayerProps & AddPlayerDispatch, AddPlayerState> {
    state = {
        name: "",
        overall: 100
    };

    handleChange = (event: any) => {
        console.log("event", event);

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
            <div className="container">
                <h3 className="text-center">Neuer Spieler</h3>
                <form className="form-horizontal">


                    <div className="form-group">
                        <div className="col-md-4">
                            <input
                                value={this.state.name}
                                onChange={this.handleChange}
                                id="name"
                                name="Name"
                                type="text"
                                placeholder="Name eingeben"
                                className="form-control input-md"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="skill_overall">Gesamt</label>
                        <div className="col-md-4">
                            <select
                                value={this.state.overall}
                                onChange={this.handleChange}
                                id="skill_overall"
                                name="skill_overall"
                                className="form-control"
                            >
                                <option value="100">Voll krass</option>
                                <option value="70">Ganz gut</option>
                                <option value="50">brauchbar</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="skill_ausdauer">Ausdauer</label>
                        <div className="col-md-4">
                            <select id="skill_ausdauer" name="skill_ausdauer" className="form-control">
                                <option value="100">Marathon</option>
                                <option value="70">Jogger</option>
                                <option value="50">Beamter</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="skill_speed">Speed</label>
                        <div className="col-md-4">
                            <select id="skill_speed" name="skill_speed" className="form-control">
                                <option value="100">Porsche</option>
                                <option value="70">Polo</option>
                                <option value="50">Trabi</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="skill_technik">Technik</label>
                        <div className="col-md-4">
                            <select id="skill_technik" name="skill_technik" className="form-control">
                                <option value="100">Barcelona</option>
                                <option value="70">Bayern</option>
                                <option value="50">FCA</option>
                            </select>
                        </div>
                    </div>
                    <span className="submit-btn">
                        <button className="btn btn-primary">Speichern</button>
                </span>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<State>): AddPlayerDispatch => ({
    onHandleChange: (player: Player) => console.log(player)
});

const mapStateToProps = (state: State): AddPlayerProps => {
    return {
        player: state.player
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayerComponent);

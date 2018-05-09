import * as React from "react";

export interface AddPlayerProps {
}

export default class AddPlayerComponent extends React.Component<AddPlayerProps> {
    render() {
        return (
            <div className="container">
                <form className="form-horizontal">
                    <h1>Add</h1>

                    <div className="form-group">
                        <div className="col-md-4">
                            <input
                                id="Name"
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
                            <select id="skill_overall" name="skill_overall" className="form-control">
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

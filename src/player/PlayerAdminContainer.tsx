import * as React from 'react';
import { connect } from 'react-redux';
import { State, Player } from '../app/Types';
import { Dispatch } from 'redux';
import { addPlayer, loadPlayers } from './PlayerActions'

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
    onLoadPlayerData: () => dispatch(loadPlayers.started({})),

});

const mapStateToProps = (state: State): PlayerAdminContainerProps => {
    return {
        players: state.players
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);   
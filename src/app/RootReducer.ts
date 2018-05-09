import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { Player, State,} from './Types';
import {loadPlayers} from "../player/PlayerActions";

const INITIAL_PLAYERS: Player[] = [];

export const INITAL_STATE: State = {
    players: INITIAL_PLAYERS
};

export const reducer = (state: State, action: Action): State => {

    if (isType(action, loadPlayers.done)) {
        return {
            ...state,
            players: action.payload.result.players
        }
    }
    return state;
};
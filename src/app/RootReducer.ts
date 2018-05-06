import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { Cleaner, Player, State, Team } from './Types';
import {loadPlayers} from "../player/PlayerActions";

const INITIAL_TEAMS: Team[] = [];
const INITIAL_CLEANER: Cleaner[] = [];
const INITIAL_PLAYERS: Player[] = [];

export const INITAL_STATE: State = {
    teams: INITIAL_TEAMS,
    cleaners: INITIAL_CLEANER,
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
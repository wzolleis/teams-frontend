import {Action} from "redux";
import {isType} from "typescript-fsa";
import {Player, State,} from "./Types";
import {loadPlayerAction, loadPlayers} from "../player/PlayerActions";

const INITIAL_PLAYERS: Player[] = [];

export const DEFAULT_PLAYER: Player =
    {
        name: "Hugo",
        overall: 70,
        typ: "Läufer",
        skills: {
            speed: 100,
            condition: 100,
            technik: 100
        }
    };

export const ERROR_PLAYER: Player =
    {
        name: "Error",
        overall: 0,
        typ: "N/A",
        skills: {
            speed: 0,
            condition: 0,
            technik: 0
        }
    };

export const INITAL_STATE: State = {
    players: INITIAL_PLAYERS,
    selectedPlayer: undefined
};

export const reducer = (state: State, action: Action): State => {

    if (isType(action, loadPlayers.done)) {
        return {
            ...state,
            players: action.payload.result.players
        };
    }
    if (isType(action, loadPlayerAction.done)) {
        return {
            ...state,
            selectedPlayer: action.payload.result.player
        }
    }
    return state;
};
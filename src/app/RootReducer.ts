import {Action} from "redux";
import {isType} from "typescript-fsa";
import {Player, State,} from "./Types";
import {loadPlayers} from "../player/PlayerActions";

const INITIAL_PLAYERS: Player[] = [];

const DEFAULT_PLAYER: Player =
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

export const INITAL_STATE: State = {
    players: INITIAL_PLAYERS,
    player: DEFAULT_PLAYER
};

export const reducer = (state: State, action: Action): State => {

    if (isType(action, loadPlayers.done)) {
        return {
            ...state,
            players: action.payload.result.players
        };
    }
    return state;
};
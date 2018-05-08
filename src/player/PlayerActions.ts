import actionCreatorFactory from "typescript-fsa";
import {Player, State} from "../app/Types";
import {Dispatch} from "redux";
import {getPlayers} from "../api/TeamsApi";

const actionCreator = actionCreatorFactory();

/**
 * Spielerdaten laden
 */
export const loadPlayers = actionCreator.async<{},   // parameter type
    {
        players: Player[]
    },   // success type
    { code: number }   // error type
    >("LOAD_PLAYERS");

export const addPlayer = actionCreator.async<{ player: Player },   // parameter type
    {
        players: Player[]
    },   // success type
    { code: number }   // error type
    >("ADD_PLAYER");

/**
 * action creator um die Spielerdaten zu laden
 * @param {Dispatch<State>} dispatch Daten an den Store dispatchen
 */
export const loadPlayerData = (dispatch: Dispatch<State>) => {

    dispatch(loadPlayers.started);
    getPlayers().then(data => {
        console.log("data", data);
        dispatch(loadPlayers.done(
            {
                params: {},
                result: {
                    players: data,
                }
            }));
    });
};
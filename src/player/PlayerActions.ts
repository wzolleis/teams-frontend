import actionCreatorFactory from "typescript-fsa";
import {Player} from "../app/Types";
import {Dispatch} from "redux";
import {getPlayer, getPlayers} from "../api/TeamsApi";

const actionCreator = actionCreatorFactory();

/**
 * Spielerdaten laden
 */
export const loadPlayers = actionCreator.async<
    null,   // parameter type
    {
        players: Player[]
    },   // success type
    { code: number }   // error type
    >("LOAD_PLAYERS");

export const loadPlayerAction = actionCreator.async<
    {id: number },   // parameter type
    {
        player: Player
    },   // success type
    { code: number }   // error type
    >("LOAD_PLAYER");

/**
 * action creator um die Spielerdaten zu laden
 * @param {Dispatch<State>} dispatch Daten an den Store dispatchen
 */
export const loadAllPlayers = async (dispatch: Dispatch) => {
    const data: Player[] = await getPlayers();
    dispatch(loadPlayers.done(
        {
            params: null,
            result: {
                players: data,
            }
        }));
};

export const loadPlayer = async (dispatch: Dispatch, id: number) => {
    const data = await getPlayer(id);
    dispatch(loadPlayerAction.done(
        {
            params: {id},
            result: {
                player: data
            }
        }
    ))
};
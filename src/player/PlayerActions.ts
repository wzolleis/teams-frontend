import actionCreatorFactory from 'typescript-fsa';
import { Player } from '../app/Types';

const actionCreator = actionCreatorFactory();

/**
 * Laedt die Daten der Anwendung
 */
export const loadPlayers = actionCreator.async<
    {},   // parameter type
    {
        players: Player[]
    },   // success type
    { code: number }   // error type
    >('LOAD_PLAYERS');

export const addPlayer = actionCreator.async<
    {player: Player},   // parameter type
    {
        players: Player[]
    },   // success type
    { code: number }   // error type
    >('ADD_PLAYER');
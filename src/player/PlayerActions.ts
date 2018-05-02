import actionCreatorFactory from 'typescript-fsa';
import { Player} from '../app/Types'

const actionCreator = actionCreatorFactory();

export const somethingHappened =
    actionCreator<{ foo: string }>('SOMETHING_HAPPENED');


/**
 * Laedt die Daten der Anwendung
 */
export const loadPlayers = actionCreator.async<
    {},   // parameter type
    {
        player: Player[]
    },   // success type
    { code: number }   // error type
    >('LOAD_PLAYERS');

import { Action } from 'redux';
import { Observable } from 'rxjs';
import { Player } from '../app/Types'
import { loadPlayers } from './PlayerActions'

const players: Player[] = [{
    id: 1,
    name: "Roland",
    overall: 80,
    skills: {
        speed: 80,
        technik: 70,
        endurance: 90
    }
}];

export const loadPlayersEpic = (actions$: Observable<Action>): Observable<Action> => {
    return actions$.filter(loadPlayers.started.match)
        .map(action => {
            action.payload = {};
            return loadPlayers.done(
                {
                    params: action.payload,
                    result: {
                        players,
                    }
                });
        });

};
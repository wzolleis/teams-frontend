import {Action, Store} from "redux";
import {Observable} from "rxjs";
import {loadPlayers, somethingHappened} from "./PlayerActions";
import {State} from "../app/Types";
import {Epic} from "redux-observable";
import {getPlayers} from "../api/TeamsApi";

export const loadPlayersEpic: Epic<Action, State> = (actions$: Observable<Action>, store: Store<State>): Observable<Action> => {
    return actions$.filter(loadPlayers.started.match)
        .map(action => {
            action.payload = {};
            getPlayers().then(data  => {
                console.log('data', data);
                store.dispatch(loadPlayers.done(
                    {
                        params: action.payload,
                        result: {
                            players: data,
                        }
                    }));
            });
            return somethingHappened;
        });

};


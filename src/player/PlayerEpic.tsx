import {Action} from "redux";
import {Observable} from "rxjs";
import {loadPlayers} from "./PlayerActions";
import {State} from "../app/Types";
import {Epic} from "redux-observable";
import {PlAYERS_URL} from "../api/TeamsApi";
import {ajax} from "rxjs/observable/dom/ajax";

export const loadPlayersEpic: Epic<Action, State> = (actions$: Observable<Action>): Observable<Action> => {
    return actions$.filter(loadPlayers.started.match)
        .switchMap(() =>
            ajax(PlAYERS_URL)
                .mergeMap(response => Observable.of(
                    {
                        type: loadPlayers.done,
                        payload: response.response
                    }
                ))
        )

};


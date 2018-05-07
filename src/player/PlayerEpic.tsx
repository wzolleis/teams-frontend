import {Action, Store} from "redux";
import {Observable} from "rxjs";
import {loadPlayers} from "./PlayerActions";
import axios from "axios";
import {State} from "../app/Types";
import {Epic} from "redux-observable";

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
            return loadPlayers.done(
                {
                    params: action.payload,
                    result: {
                        players: [],
                    }
                });
        });

};

async function getPlayers() {
    try {
        // Set config defaults when creating the instance
        const instance = axios.create({
            baseURL: 'https://teams-backend.herokuapp.com'
        });
        const response = await instance.get("/api/players");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
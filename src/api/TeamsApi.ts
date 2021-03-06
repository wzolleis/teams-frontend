import axios, {AxiosInstance} from "axios";
import {Player} from "../app/Types";
import {ERROR_PLAYER} from "../app/RootReducer";

// Heroku: TEAMS_BACKEND_URL, Lokal: REACT_APP_TEAMS_BACKEND_URL, Fallback: 'https://teams-backend-dev.herokuapp.com'
const BASE_URL: string = process.env.TEAMS_BACKEND_URL || process.env.REACT_APP_TEAMS_BACKEND_URL || 'https://teams-backend-dev.herokuapp.com';

export async function getPlayers(): Promise<Player[]> {
    try {
        // Set config defaults when creating the instance
        const instance: AxiosInstance = axios.create({
            baseURL: BASE_URL
        });

        console.log('BASE_URL =', BASE_URL);

        const response = await instance.get("/api/players");
        return response.data;
    } catch (error) {
        console.error(error);

        return [];
    }
}

export async function getPlayer(id: number): Promise<Player> {
    try {
        // Set config defaults when creating the instance
        const instance: AxiosInstance = axios.create({
            baseURL: BASE_URL
        });
        const response = await instance.get(`/api/player/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return ERROR_PLAYER;
    }
}
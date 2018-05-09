import axios, {AxiosInstance} from "axios";
import {Player} from "../app/Types";

const BASE_URL: string = 'https://teams-backend.herokuapp.com';

export async function getPlayers(): Promise<Player[]> {
    try {
        // Set config defaults when creating the instance
        const instance: AxiosInstance = axios.create({
            baseURL: BASE_URL
        });
        const response = await instance.get("/api/players");
        return response.data;
    } catch (error) {
        console.error(error);

        return [];
    }
}
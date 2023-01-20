import {api} from "../utils/api";

export async function loginClient(data){
    return await api.post("/api/projetEnchere/client/login", data);
}

export async function loginAdmin(data){
    return (await api.post("api/projetEnchere/admin", data)).data
}

export async function login(data){
    return await data.isAdmin ? loginAdmin(data) : loginClient(data);
}
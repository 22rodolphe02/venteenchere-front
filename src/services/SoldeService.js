import {api} from "../utils/api";

export async function listRequestNonValid(){
    return (await api.get("/api/soldes/depot-non-valid")).data
}

export async function updateNonValid(data){
    return (await api.post("/api/soldes/update", data)).data
}
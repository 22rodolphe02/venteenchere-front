import {api} from "../utils/api";

export async function addCategory(data){
    return (await api.post("/api/projetEnchere/categorie", data)).data
}

export async function listCategory(){
    return (await api.get("/api/projetEnchere/categorie")).data
}
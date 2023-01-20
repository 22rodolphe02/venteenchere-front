import {api} from "../utils/api";

export async function getRecordEnchere(){
    return (await api.get("/api/projetEnchere/enchere/record")).data
}

// prendre record acheteur
export async function getRecordAcheteur(){
    return (await api.get("/api/projetEnchere/enchere/recordAcheteur")).data
}

// prendre les categories par classement
export async function getCategoriesOrderByClassement(){
    return (await api.get("api/projetEnchere/categorie/classementCategorie")).data
}
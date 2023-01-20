import Brand from "./Brand";
import {useEffect, useState} from "react";
import {listRequestNonValid, updateNonValid} from "../services/SoldeService";

export default function RequeteSoldeClient(){
    const [data, setData] = useState(null);

    useEffect( () => {
            if (!localStorage.getItem("token")){
                window.location.href = "/"
            }
            async function fetchData(){
                let dat = await listRequestNonValid();
                setData(dat.data)
            }
            fetchData();

        },
        []
    )


    async function valid(e){
        let data = {}
        data.valider = true
        data.id = e.target.id;

        updateNonValid(data).then(() =>{
            window.location.href ="/requete-solde-client"
        })

    }


    if (!data){
        return (
            <div className="preloader">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }else {

        return (
            <>
                <Brand/>
                <div className="tab-pane fade mt-5 active show" id="v-pills-purchase" role="tabpanel"
                     aria-labelledby="v-pills-purchase-tab">
                    <div className=" col-md-7 ms-5">
                        <h3>Requetes de rechargement de solde</h3>
                        <table className="eg-table order-table table mb-0 mt-1">
                            <thead>
                            <tr>
                                <th> Nom</th>
                                <th> Email</th>
                                <th> Montant</th>
                                <th> Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                {data.map(res =>
                                    <tr key={res.id}>
                                        <td>{res.client.nom}</td>
                                        <td>{res.client.email}</td>
                                        <td>{res.montant}</td>
                                        <td >
                                            <button className="btn btn-outline-primary" id={res.id} onClick={valid}> Valider</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
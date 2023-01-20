//  statistique par record enchere
import Brand from "../Brand";
import {useEffect, useState} from "react";
import {getCategoriesOrderByClassement, getRecordEnchere} from "../../services/StatistiqueService";

export default function Statistique(){
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData(){
            console.log("salut")
            let donne = {}
            donne.enchere = await getRecordEnchere();
            donne.categories = await getCategoriesOrderByClassement()
            setData(donne);
        }

        fetchData()
    }, [])

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
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    {/*<p className="h3">{data.client}</p>*/}
                                    <h5>Record Enchere:</h5>
                                    <p >{data.enchere.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 offset-2">
                            <h3>Classement selon categories</h3>
                            <div className="table-wrapper">
                                <table className="eg-table order-table table mb-0 border-1"
                                       style={{borderColor: "#32c36c"}}>
                                    <thead style={{background: "#32c36c"}}>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category</th>
                                        <th>Nombre enchere</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.categories.map((res) =>
                                        <tr key={res.id}>
                                            <td data-label="Bidding ID">{res.id}</td>
                                            <td data-label="Bid Amount(USD)">{res.categorie}</td>
                                            <td data-label="Bid Amount(USD)">{res.nbEnchere}</td>
                                        </tr>
                                    )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
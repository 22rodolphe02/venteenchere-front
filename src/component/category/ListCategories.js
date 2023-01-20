import Brand from "../Brand";
import {useEffect, useState} from "react";
import {listCategory} from "../../services/CategoryService";

export default function ListCategories(){
    const [data, setData] = useState(null);

    useEffect(  () => {
        if (!localStorage.getItem("token")){
            window.location.href = "/"
        }
        async function fetchData() {
            let dat = await listCategory();
            setData(dat)
        }
        fetchData();
        },
        []
    )
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
        return(
            <>
                <Brand />
                <div className="container">
                    <div className="row gy-4 mb-60 d-flex justify-content-center">
                        <div className="col-5">
                            <div className="table-wrapper">
                                <table className="eg-table order-table table mb-0 border-1" style={{borderColor: "#32c36c"}}>
                                    <thead style={{background: "#32c36c"}}>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((res) =>
                                        <tr key={res.id}>
                                            <td data-label="Bidding ID">{res.id}</td>
                                            <td data-label="Bid Amount(USD)" >{res.categorie}</td>
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
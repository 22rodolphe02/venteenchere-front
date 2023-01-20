import Brand from "../../component/Brand";
import {useForm} from "react-hook-form";
import {addCategory} from "../../services/CategoryService";
import {toast} from "react-toastify";
import {useEffect} from "react";



export default function AjoutCategory(){
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        if (!localStorage.getItem("token")){
            window.location.href = "/"
        }
    }, [])
    // toast.configure();
    function submit(data){
        addCategory(data).then(r => {
            console.log("ajout reussi")
            // toast('ajout reussi')
        });
    }

    return(
        <>
            <Brand/>
            <div className="pt-120 pb-120">
                <div className="container">
                    <div className="row d-flex justify-content-center g-4">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="form-wrapper wow fadeInUp" data-wow-duration="1.5s"
                                 data-wow-delay=".2s">
                                <div className="form-title">
                                    <h3>Ajouter categorie</h3>
                                </div>
                                <form className="w-100" onSubmit={handleSubmit(submit)}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-inner">
                                                <label>Nouveau categorie </label>
                                                <input type="text" {...register('categorie')} placeholder="Entrer le nom categorie"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="account-btn" type="submit">Valider</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import { useForm} from 'react-hook-form'
import {loginAdmin} from "../services/LoginService";




export default function Login(){
    const { handleSubmit, register} = useForm();

    async function submit(data) {
        localStorage.setItem("token", (await loginAdmin(data)));
        window.location.href = "/list-categories"
    }

    return(
        <>
            {/*<Brand/>*/}
            <div className="login-section pt-120 ">
                <img alt="imags" src={require('../assets/images/bg/section-bg.png')} className="img-fluid section-bg-top" />
                <img alt="imags" src={require('../assets/images/bg/section-bg.png')} className="img-fluid section-bg-bottom" />
                <div className="container">
                    <div className="row d-flex justify-content-center g-4">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="form-wrapper wow fadeInUp" data-wow-duration="1.5s"
                                 data-wow-delay=".2s">
                                <div className="form-title">
                                    <h3>Log In</h3>
                                </div>
                                <form className="w-100" onSubmit={handleSubmit(submit)}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-inner">
                                                <label>Enter Your Email *</label>
                                                <input type="email" value="admin@gmail.com" placeholder="Enter Your Email" {...register('email')} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-inner">
                                                <label>Password *</label>
                                                <input type="password" value="admin" name="password" {...register('mpd')} id="password" placeholder="Password"/>
                                                <i className="bi bi-lock-fill" id="togglePassword"></i>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                        </div>
                                    </div>
                                    <button className="account-btn" type="submit">Log in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
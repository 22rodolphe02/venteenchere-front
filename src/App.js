import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";

import "./assets/css/all.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/boxicons.min.css"
import "./assets/css/bootstrap-icons.css"
import "./assets/css/jquery-ui.css"
import "./assets/css/slick-theme.css"
import "./assets/css/slick.css"
import "./assets/css/nice-select.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/odometer.css"
import "./assets/css/style.css"
import RequestSoldeClient from "./component/RequeteSoldeClient";
import AjoutCategory from "./component/category/AjoutCategory";
import Statistique from "./component/stat/Statistique";
import ListCategories from "./component/category/ListCategories";

class App extends React.Component {
    render() {
        return (
            <>

                <Routes>
                    <Route path={"/"} element={<Login/>} />
                    {/*<Route path={"/enchere"} element={<Enchere/>} />*/}
                    <Route path={"/requete-solde-client"} element={<RequestSoldeClient/>}/>
                    <Route path={"/list-categories"} element={<ListCategories/>}/>
                    <Route path={"/ajout-category"} element={<AjoutCategory/>}/>{/**/}
                    <Route path={"/statistique"} element={<Statistique/>}/>
                </Routes>
                <script src="./assets/js/jquery-3.6.0.min.js"></script>
                <script src="./assets/js/jquery-ui.js"></script>
                <script src="./assets/js/bootstrap.bundle.min.js"></script>
                <script src="./assets/js/wow.min.js"></script>
                <script src="./assets/js/swiper-bundle.min.js"></script>
                <script src="./assets/js/slick.js"></script>
                <script src="./assets/js/jquery.nice-select.js"></script>
                <script src="./assets/js/odometer.min.js"></script>
                <script src="./assets/js/viewport.jquery.js"></script>
                <script src="./assets/js/jquery.magnific-popup.min.js"></script>
                <script src="./assets/js/main.js"></script>
            </>

        );
    }
}

export default App;

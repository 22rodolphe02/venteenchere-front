
export default function Brand(){
    return(
        <>
            <div className="topbar">
                <div className="topbar-left d-flex flex-row align-items-center">
                    <ul className="topbar-social-list gap-2">
                        <li><i className='bi bi-person'></i> ETU001545</li>
                        <li><i className='bi bi-person'></i> ETU001607</li>
                        <li><i className='bi bi-person'></i> ETU1560</li>
                        <li><i className='bi bi-person'></i> ETU001671</li>
                    </ul>
                </div>
            </div>
            <header className="header-area style-1">
                <div className="header-logo">
                    <a href="/statistique"><img alt="image" src={require('../assets/images/bg/header-logo.png')} /></a>
                </div>
                <div className="main-menu">
                    <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                        <div className="mobile-logo-wrap ">
                            <a href="index-2.html">
                                <img alt="image" src={require('../assets/images/bg/header-logo.png')} /></a>
                        </div>
                        <div className="menu-close-btn">
                            <i className="bi bi-x-lg"></i>
                        </div>
                    </div>
                    <ul className="menu-list">
                        <li ><a href="/statistique" >Statistique</a></li>
                        <li className="menu-item-has-children">
                            <a href="">Categories</a><i className='bx bx-plus dropdown-icon'></i>
                            <ul className="submenu">
                                <li><a href="/list-categories">Liste categories</a></li>
                                <li><a href="/ajout-category">Ajout de categories</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#" className="drop-down">Actions</a><i className='bx bx-plus dropdown-icon'></i>
                            <ul className="submenu">
                                <li><a href="/requete-solde-client">Requete solde client</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="nav-right d-flex align-items-center">
                    <div className="hotline d-xxl-flex d-none">
                    </div>
                </div>
            </header>
        </>
    )
}
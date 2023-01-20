import Brand from "../Brand";

export default function ListEnchere(){
    return(
        <>
            <Brand />
            <div className="container">
                <div className="row gy-4 mb-60 d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-10 ">
                        <div data-wow-duration="1.5s" data-wow-delay="0.2s"
                             className="eg-card auction-card1 wow fadeInDown">
                            <div className="auction-content">
                                <h4><a href="auction-details.html">Brand New royal Enfield 250 CC For Sale</a></h4>
                                <p>Bidding Price : <span>$85.9</span></p>
                                <div className="auction-card-bttm">
                                    <a href="auction-details.html" className="eg-btn btn--primary btn--sm ">Place a Bid</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
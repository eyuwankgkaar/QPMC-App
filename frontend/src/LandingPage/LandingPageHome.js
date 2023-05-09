import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPageHome = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="center-vertical bg-dark">
                <div className="about-us-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 my-4 my-lg-0">
                                <div className="img-head">
                                    <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/xq2w00tyrw5ow45tn149" alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h2 className="text-head">
                                    QPMC
                                </h2>
                                <div className="break-small mb-2"></div>
                                <p className="text-para">
                                    {/* Qatar Primary Materials Co (QPMC) was established on the instruction of the Qatari Government in 2006 to ensure supplies of building materials to the local market. QPMC is at the forefront of facilitating the construction boom in Qatar. The company stands for quality, reliability and efficiency. */}
                                    {/* QPMC was founded in 2006 by instruction of the Government of Qatar through an Emri decree to provide efficient port service at the gabbro berths, as well as developing them to increase their capacity and ability to manage larger quantities of raw materials imported to facilitate trade.
                            It is a provider of Quality, Environment, Occupational Health & Safety Management System Training and Consultancy; with Business excellence and Technology upgradation through Six Sigma, Lean Sigma and Lean Manufacturing using Excel based software. */}
                                </p>
                                <div className="row">
                                    <div className="col-12 col-md-6 my-2 my-md-0">
                                        <div className="box" onClick={() => navigate('/it-form')}>
                                            <i className="fa fa-globe my-3"></i>
                                            <h4 className="mb-0">IT</h4>
                                            <p className="my-0">Create IT Request</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 my-2 my-md-0">
                                        <div className="box" onClick={() => navigate('/main-page')}>
                                            <i className="fa fa-bell my-3"></i>
                                            <h4 className="mb-0">Dashboard</h4>
                                            <p className="my-0">Handle Notifications</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPageHome;
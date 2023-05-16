import React from "react";

function Register() {
    return <>
    <div className="containmer">
        <div className="row justify-content-md-center mt-4">
            <div className="col-lg-5 card border-primary mb-3">
                <div className="card-header h4 text-center">
                    Register An Account
                    <div className="card-body">
                        <div className="form-group">
                            <label className="col-form-label mt-4">
                                Username

                            </label>
                            <input type="text" className="form-control" placeholder="Enter Username"/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4">
                                Email

                            </label>
                            <input type="text" className="form-control" placeholder="Enter Email"/>

                            <div className="form-group">
                            <label className="col-form-label mt-4">
                                Password

                            </label>
                            <input type="text" className="form-control" placeholder="Enter Your Password"/>
                        </div>
                        <div className="row justify-content-md-center form-group mt-4">
                            <button type="button">
                                <label classname="col-sm-6 btn btn-outline-secondary center">
                                    Register Now
                                </label>
                            </button>
                         </div>
                         
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
    
}

export default Register;

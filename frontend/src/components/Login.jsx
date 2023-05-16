import React from "react";

function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-lg-5 card border-primary mt-4">
                <div className="card-header">You are at Right Place</div>
                     <div className="card-body">
                        <h4 className="card-title">Login Now</h4>
                        <div className="form-group">
  <label htmlFor="exampleInputEmail1" className="form-label mt-4">
    Email or Username
  </label>
  <input
    type="email"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Enter email or Username"
    fdprocessedid="eors0k"
  />
  <small id="emailHelp" className="form-text text-muted">
    We'll never share your email with anyone else.
  </small>
</div>

<div className="form-group">
  <label htmlFor="exampleInputEmail1" className="form-label mt-4">
    Password
  </label>
  <input
    type="password"
    className="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Enter Password"
    fdprocessedid="eors0k"
  />
  <small id="emailHelp" className="form-text text-muted">
    We'll never share your Password with anyone else.
  </small>
</div>
<button type="button" class="btn btn-primary" fdprocessedid="gg9hc">Login</button>



                     </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
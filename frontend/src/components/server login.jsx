import { stringify } from "@angular/core/src/facade/lang";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Login({user,setUser}) {
    const navigation= useNavigate()
const [form,setForm] = useState({
username: "",
password: "",
});
useEffect(() => {
   if(user)
   {
    navigation('/')
   }
} ,[]);



const [errors,setErrors]=useState(null);

const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
};

const handleSubmit=async ()=>{
    console.log('form',form);

    const result=await Login(form);
    console.log("form",result);
    setErrors(null)

    if(result.status==200){
        if(result.data.status==200){
            localStorage.setItem('user',JSON.stringify(result.datat.data));
            navigation("/");
            return;
        }
        if(result.data.status==201){
            setErrors(result.datat.data)
            return;
        }
        if(result.data.status==202){
            toast(result.data.message);
            return;
    }
}

}
    return (
        <div className="container">
        <ToastContainer/>
        <div className="row justify-content-center mt-4">
        <div className="col-lg-5 card border-primary mt-4">
        <div className="card-body">
        <h4 className="card-title">Login Now</h4>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">
            Email or Username
            </label>
            <input
            type="text"
            onChange={handleChange}
            name="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email or Username"
            />
            <small id="emailHelp" className="form-text text-muted">
                Your Privacy Matters for us that's why we use Active directory to prevant loss of data.
            </small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
               Password
               </label>
               <input
               type="password"
               onChange={handleChange}
               name="password"
               className="form-control"
               id="exampleInputEmail1"
               aria-describedby="emailHelp"
               placeholder="Enter Password"
               />
               {errors?.password && (
               <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
                {errors.password.msg}
               </small>
                )}
               </div>
               <button type="button" onClick={handleSubmit}class="btn btn-primary">
                Login
               </button>
               </div>
               </div>
               </div>
               </div>
        );}


export default Login;

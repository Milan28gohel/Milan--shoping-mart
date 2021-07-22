import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { LoginForm } from '../LoginForm';

class RegistrationForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            confirmpassword:""
        };
    }

    handleClick(event){
        event.preventDefault()
       const apiBaseUrl="https://reqres.in/api";
       console.log("values",this.state.email,this.state.password);
        const self =this;
        const payload={
            "email":this.state.email,
            "password":this.state.password
        }
        console.log(payload);
        axios.post(apiBaseUrl+'/register',payload)
        .then(function(response){
            console.log(response);
            if(response.data.code ===200){
                let loginscreen=[];
                loginscreen.push(<LoginForm parentContext={this}/>);
                let loginmessage="not Registered yet.Go to Registration";
                self.props.parentContext.setState({loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Register",
                isLogin:true});
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }
   render(){
        return(
            <form>
                    <h3>REGISTRATION</h3>

                    <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>this.setState({email:event.target.value})} />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=>this.setState({password:event.target.value})} />
                    </div>

                    <div className="form-group">
                      <label>ConfirmPassword</label>
                      <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=>this.setState({password:event.target.value})} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={(event)=>this.handleClick(event)}>Sign Up</button>
                    <p className="forgot-password text-right">
                    Already registered <Link to="./LoginForm">sign in?</Link>
                    </p>
            </form>
        )
    }
}
export default RegistrationForm;
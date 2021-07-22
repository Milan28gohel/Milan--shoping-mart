import { Button } from "bootstrap";
import { Component } from "react";
import RegistrationForm from "./RegistrationForm";
import { LoginForm } from "../LoginForm";

class loginscreen extends Component{
    constructor(){
        super();
        this.state={
            Username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            buttonLabel:'Register',
            isLogin:true
        }
    }
    componentWillUnmount(){
        let loginscreen=[];
        loginscreen.push(<LoginForm parentContext={this} appContext={this.props.parentContext}/>);
        let loginmessage="not registered yet,Register Now";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
              })

    }

    handleClick(event){
        console.log("event",event);
        let loginmessage;
        if(this.state.isLogin){
          let loginscreen=[];
          loginscreen.push(<RegistrationForm parentContext={this}/>);
          loginmessage = "Already registered.Go to Login";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Login",
                         isLogin:false
                       })
        }
        else{
          let loginscreen=[];
          loginscreen.push(<LoginForm parentContext={this}/>);
          loginmessage = "Not Registered yet.Go to registration";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Register",
                         isLogin:true
                       })
        }
      }

    render(){
        return(
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    <div>
                        <button label={this.state.buttonLabel}
                        primary={true}
                        onClick={(event)=>this.handelClick(event)}/>
                    </div>
                </div>

            </div>
        )
    }s
}
export default loginscreen;
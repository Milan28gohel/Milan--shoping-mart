import { Component } from "react";
import Autocomplate from "./Autocomplate";
import GMap from "./Map";


class Contact extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
    
            <div>
                <h1>Contact Us</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                // value={this.state.name}
                                onChange={this.onNameChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                // value={this.state.email}
                                onChange={this.onEmailChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="street_address">Street Address</label>
                            <textarea className="form-control"
                                placeholder="Enter Street address"
                                // value={this.state.street_address}
                                onChange={this.onChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="area">Area</label>
                            < input type="Area" className="form-control"
                                placeholder="Enter area"
                                // value={this.state.area}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="City" className="form-control"
                                placeholder="Enter City"
                                // value={this.state.city}
                                onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input type="state" className="form-control"
                                placeholder="Enter State"
                                // value={this.state.state}
                                onChange={this.onChange} />
                        </div>
                    </form>
                <GMap />
            </div>
            
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
}
export default Contact;
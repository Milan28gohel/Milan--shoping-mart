import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import * as routes from "../lib/constants";
import DashboardFilter from "../component/common/DashboardFilter";

class LeftSideBar extends Component{
    render(){
        return(
            <div>
                <Route 
                exact
                path={routes.ROOT_ROUTE}
                component={this.handleDashboardFilter}
                />
                <Route 
                exact
                path={routes.ITEMS_ROUTE}
                component={this.handleDashboardFilter}
                />
            </div>
        );
    }

    handleDashboardFilter=()=>{
        const{handleApplyClick}=this.props;
        return<DashboardFilter handleApplyClick={handleApplyClick}/>;
    };
}

LeftSideBar.propTypes={
    handleApplyClick: PropTypes.func.isRequired
};


export default LeftSideBar;
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import * as routes from "../lib/constants";
import { ItemList, Product } from "../component";

class DashboardRoutes extends Component {
    render(){
        return(
            <div>
                <Switch>
                    <Route 
                    exact 
                    path={routes.ROOT_ROUTE}
                    component={this.handleItemList}
                     />

                    <Route 
                    exact
                    path={routes.ITEMS_ROUTE}
                    component={this.handleItemList}
                    /> 

                    <Route exact path={routes.ITEMS_ROUTE} component={Product} />

                    <Route
                    exact
                    path={routes.CARTS_ROUTE}
                    component={this.handleCartList}
                    />
                </Switch>
            </div>
        );
    }
    
    handleItemList=()=>{
        const{items,handleAddtoCart} = this.props;
        console.log(items);
        return(
            <ItemList 
              items={items}
              handleAddtoCart={handleAddtoCart}
              isCart={false}
            />
        );
    };

    handleCartList=()=>{
        const{carts,handleRemoveToCart}=this.props;
        return(
            <ItemList items={carts} handleRemoveToCart={handleRemoveToCart} isCart />
        );
    };

    handleProduct=()=>{
        const{handleAddtoCart}=this.props;
        return<Product handleAddtoCart={handleAddtoCart} />;
    };
}

DashboardRoutes.propTypes ={
    items:PropTypes.any,
    handleAddtoCart:PropTypes.func.isRequired,
    handleRemoveToCart:PropTypes.func.isRequired,
    carts:PropTypes.array
};

export default  DashboardRoutes;
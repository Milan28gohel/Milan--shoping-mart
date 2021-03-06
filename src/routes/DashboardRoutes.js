import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import * as routes from "../lib/constants";

import { ItemList, Product ,LoginForm} from "../component";

import RegistrationForm from "../component/RegistrationForm/RegistrationForm";
import Contact from "../component/Contact/Contact";

class DashboardRoutes extends Component {
  render() {
    return (
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
          <Route exact path={routes.ITEM_ROUTE} component={Product} />
          <Route
            exact
            path={routes.CARTS_ROUTE}
            component={this.handleCartList}
          />
          <Route 
          exact
          path={routes.REGISTRATION_ROUTE}
          component={this.handleRegistration}
          />
          <Route 
          exact
          path={routes.LOGIN_ROUTE}
          component={this.handleLogin}
          />
          <Route
          exact
          path={routes.CONTACT_ROUTE}
          component={this.handlecontact}
          />
        </Switch>
      </div>
    );
  }

  handleItemList = () => {
    const { items, handleAddToCart } = this.props;
    return (
      <ItemList
        items={items}
        handleAddToCart={handleAddToCart}
        isCart={false}
      />
    );
  };

  handleLogin=()=>{
    return(
      <LoginForm />
    );
  };

  handleRegistration=()=>{
    return(
      <RegistrationForm />
    )
  }

  handlecontact=()=>{
    return(
      <Contact/>
    )
  }

  handleCartList = () => {
    const { carts, handleRemoveToCart } = this.props;
    return (
      <ItemList items={carts} handleRemoveToCart={handleRemoveToCart} isCart />
    );
  };

  handleProduct = () => {
    const { handleAddToCart } = this.props;
    return <Product handleAddToCart={handleAddToCart} />;
  };
}

DashboardRoutes.propTypes = {
  items: PropTypes.any,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveToCart: PropTypes.func.isRequired,
  carts: PropTypes.array
};

export default DashboardRoutes;
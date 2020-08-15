import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Register from "../pages/Register";
import { useSelector } from "react-redux";
import Product from "../pages/Product";

const Router = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <Switch>
      {token ? (
        <>
          <Route path={"/"} exact component={Home} />
          <Route path={"/product/:product"} component={Product} />
        </>
      ) : (
        <>
          <Route path={"/"} exact component={Auth} />
          <Route path={"/register"} component={Register} />
        </>
      )}
    </Switch>
  );
};

export default Router;

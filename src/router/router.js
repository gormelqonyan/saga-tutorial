import React from "react"
import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Register from "../pages/Register";
import {useSelector} from "react-redux";

const Router = () => {
    const token = useSelector(state => state.auth.token);
    return (
        <Switch>
            {
                token ? (
                    <Route path={"/"} component={Home}/>
                ) : (
                    <>
                        <Route path={"/"} exact component={Auth}/>
                        <Route path={"/register"} component={Register}/>
                    </>
                )
            }
        </Switch>
    )
}

export default Router;
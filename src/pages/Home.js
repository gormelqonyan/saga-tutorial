import React from "react";
import {Button} from "../components/atoms/ Button";
import {action} from "../store";
import {LOGOUT} from "../ constant";
import {Text} from "../components/atoms/Text";

const Home = () => {
    const logout = () => {
        action(LOGOUT)
    }
    return (
        <div>
            <Button bgColor={"#2978e2"} onClick={logout}>
                <Text color={"#fff"}>Logout</Text>
            </Button>
            Home
        </div>
    )
}

export default Home;
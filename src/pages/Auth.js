import React, {useState} from 'react';
import styled from "styled-components"
import Input from "../components/molecules/Input";
import {Text} from "../components/atoms/Text";
import {Button} from "../components/atoms/ Button";

import {useHistory} from "react-router-dom"
import {action} from "../store";
import {LOGIN} from "../ constant";

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
`

const AuthWrapper = styled.div`
  padding: 40px;
  border-radius: 15px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 3px 16px rgba(0,0,0, .16);  
`

const AuthFlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Auth = () => {
    const history = useHistory();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        action(LOGIN, {
            login,
            password
        })
    }
    return (
        <AuthContainer>
            <AuthWrapper>
                <Text center weight={700} size={24} margin={"0 0 20px"} color={"#444"}>Login</Text>
                <Input placeholder={"Login"} onChange={(e) => setLogin(e.target.value)}/>
                <Input type={"password"} placeholder={"Password"} margin={"20px 0"} onChange={(e) => setPassword(e.target.value)}/>
                <AuthFlexBox>
                    <Text color={"#444"} size={14}>
                        If you not have account please
                    </Text>
                    <Text cursor={"pointer"} color={"#2978e2"} size={14} margin={"0 0 0 5px"} onClick={() => history.push("/register")}>Sign Up</Text>
                </AuthFlexBox>
                <Button bgColor={"#2978e2"} margin={"20px auto 0"} onClick={handleLogin}>
                    <Text color={"#fff"}>Login</Text>
                </Button>
            </AuthWrapper>
        </AuthContainer>
    )
}

export default Auth;
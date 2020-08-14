import React, {useState} from "react";
import styled from "styled-components";
import {Text} from "../components/atoms/Text";
import Input from "../components/molecules/Input";
import {Button} from "../components/atoms/ Button";
import {useHistory} from "react-router-dom";
import {action} from "../store";
import {REGISTER} from "../ constant";

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
  box-shadow: 0 3px 16px rgba(0,0,0, .16);
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`

const AuthFlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Register = () => {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleRegister = () => {
        if (repeatPassword === password) {
            action(REGISTER, {
                email,
                password
            })
        }

    }


    return (
        <AuthContainer>
            <AuthWrapper>
                <Text center weight={700} size={24} margin={"0 0 20px"} color={"#444"}>Register</Text>
                <Input
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type={"password"}
                    placeholder={"Password"} margin={"20px 0"} onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type={"password"}
                    placeholder={"Repeat Password"}
                    margin={"0 0 20px"}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <AuthFlexBox>
                    <Text color={"#444"} size={14}>
                        If you have account please
                    </Text>
                    <Text cursor={"pointer"} color={"#2978e2"} size={14} margin={"0 0 0 5px"} onClick={() => history.push("/")}>Sign In</Text>
                </AuthFlexBox>
                <Button bgColor={"#2978e2"} margin={"20px auto 0"} onClick={handleRegister}>
                    <Text color={"#fff"}>Register</Text>
                </Button>
            </AuthWrapper>
        </AuthContainer>
    )
}

export default Register;
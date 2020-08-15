import React from "react";
import styled from "styled-components";
import { Text } from "../components/atoms/Text";

import { useHistory } from "react-router-dom";
import { action } from "../store";
import { LOGIN } from "../ constant";
import * as Yup from "yup";
import FormField from "../components/organizms/Form/FormField";
import SubmitButton from "../components/organizms/Form/SubmitButton";
import Form from "../components/organizms/Form/Form";

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-sizing: border-box;
`;

const AuthWrapper = styled.div`
  padding: 40px;
  border-radius: 15px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
`;

const AuthFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Auth = () => {
  const history = useHistory();

  const handleLogin = ({ email, password }) => {
    action(LOGIN, {
      email,
      password,
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().label("Email"),
    password: Yup.string().min(6).required().label("Password"),
  });

  return (
    <AuthContainer>
      <AuthWrapper>
        <Form
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Text
            center
            weight={700}
            size={24}
            margin={"0 0 20px"}
            color={"#444"}
          >
            Login
          </Text>
          <FormField placeholder={"Email"} name={"email"} />
          <FormField
            type={"password"}
            placeholder={"Password"}
            margin={"20px 0"}
            name={"password"}
          />
          <AuthFlexBox>
            <Text color={"#444"} size={14}>
              If you not have account please
            </Text>
            <Text
              cursor={"pointer"}
              color={"#2978e2"}
              size={14}
              margin={"0 0 0 5px"}
              onClick={() => history.push("/register")}
            >
              Sign Up
            </Text>
          </AuthFlexBox>
          <SubmitButton title={"Login"} />
        </Form>
      </AuthWrapper>
    </AuthContainer>
  );
};

export default Auth;

import React from "react";
import styled from "styled-components";
import { Text } from "../components/atoms/Text";
import { useHistory } from "react-router-dom";
import { action } from "../store";
import { REGISTER } from "../ constant";
import Form from "../components/organizms/Form/Form";
import * as Yup from "yup";
import FormField from "../components/organizms/Form/FormField";
import SubmitButton from "../components/organizms/Form/SubmitButton";

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
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const AuthFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  const history = useHistory();

  const handleRegister = ({ username, email, password }) => {
    console.log("username", username);
    action(REGISTER, {
      username,
      email,
      password,
    });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("User Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <AuthContainer>
      <AuthWrapper>
        <Form
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Text
            center
            weight={700}
            size={24}
            margin={"0 0 20px"}
            color={"#444"}
          >
            Register
          </Text>
          <FormField
            placeholder={"User Name"}
            name={"username"}
            margin={"0 0 20px"}
          />
          <FormField placeholder={"Email"} name={"email"} />
          <FormField
            type={"password"}
            placeholder={"Password"}
            margin={"20px 0"}
            name={"password"}
          />
          <FormField
            type={"password"}
            placeholder={"Repeat Password"}
            margin={"0 0 20px"}
            name={"confirmPassword"}
          />
          <AuthFlexBox>
            <Text color={"#444"} size={14}>
              If you have account please
            </Text>
            <Text
              cursor={"pointer"}
              color={"#2978e2"}
              size={14}
              margin={"0 0 0 5px"}
              onClick={() => history.push("/")}
            >
              Sign In
            </Text>
          </AuthFlexBox>
          <SubmitButton title={"Register"} />
        </Form>
      </AuthWrapper>
    </AuthContainer>
  );
};

export default Register;

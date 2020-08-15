import React from "react";
import Input from "../../molecules/Input";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import styled from "styled-components";

const FormFieldContainer = styled.div`
  margin: ${({ margin }) => (margin ? margin : "0")};
  text-align: left;
`;

const FormField = ({ name, placeholder, margin, ...props }) => {
  const { handleChange, setFieldTouched } = useFormikContext();
  return (
    <FormFieldContainer margin={margin}>
      <Input
        placeholder={placeholder}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...props}
      />
      <ErrorMessage name={name} />
    </FormFieldContainer>
  );
};

export default FormField;

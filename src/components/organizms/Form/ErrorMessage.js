import React from "react";
import { Text } from "../../atoms/Text";
import { useFormikContext } from "formik";

const ErrorMessage = ({ name }) => {
  const { touched, errors } = useFormikContext();
  if (!touched[name] || !errors[name]) {
    return null;
  }

  return (
    <Text size={14} color={"#e00000"} margin={"5px 0 0"}>
      {errors[name]}
    </Text>
  );
};

export default ErrorMessage;

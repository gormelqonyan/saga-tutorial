import React from "react";
import { useFormikContext } from "formik";
import { Button } from "../../atoms/ Button";
import { Text } from "../../atoms/Text";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button bgColor={"#2978e2"} margin={"20px auto 0"} onClick={handleSubmit}>
      <Text color={"#fff"}>{title}</Text>
    </Button>
  );
};

export default SubmitButton;

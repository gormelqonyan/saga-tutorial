import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#000")};
  ${({ margin }) => `margin: ${margin}`};
  border: 0;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  min-width: 150px;
`;

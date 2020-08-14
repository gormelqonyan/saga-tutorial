import styled from "styled-components";

const Input = styled.input`
  padding: 10px 15px;
  border-radius: 5px;
  border: 1px solid #c7c7c7;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  ${({margin}) => margin ? `margin: ${margin}` : ""}
  
`

export default Input;
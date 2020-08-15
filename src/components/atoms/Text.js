import styled from "styled-components";

export const Text = styled.p`
  ${({ size }) => (size ? `font-size: ${size}px` : "16px")};
  color: ${({ color }) => (color ? color : "#000")};
  ${({ center }) => (center ? `text-align: center` : "")};
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  ${({ weight }) => (weight ? `font-weight: ${weight}` : "")};
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : "")}
`;

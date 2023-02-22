import styled, { css } from "styled-components";

export const FieldSet = styled.fieldset`
  background-color: rgb(209 208 197 / 32%);
  border-radius: 8px;
  max-width: 550px;
  border: none;
`;

export const Select = styled.select`
  border-radius: 8px;
  width: 150px;
  padding: 4px;
  margin: 3px;

  ${({ wider }) =>
    wider &&
    css`
      width: 210px;
      border: 1px solid currentColor;
    `}

  &:hover {
    background-color: hsl(55, 87%, 87%);
  }
`;

export const Button = styled.button`
  background-color: rgb(221 220 207 / 93%);
  border: 1px solid currentColor;
  border-radius: 8px;
  padding: 5px;
  width: 100%;

  &&:hover {
    background-color: hsl(55, 87%, 77%);
  }
`;

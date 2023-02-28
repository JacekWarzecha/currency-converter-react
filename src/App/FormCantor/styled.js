import styled, { css } from "styled-components";

export const FieldSet = styled.fieldset`
  background-color: ${({ theme }) => theme.color.primaryColor};
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
    background: ${({ theme }) => theme.color.hoverSelect};
  }

  &:active {
    filter: brightness(90%);
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.color.interactiveAreas};
  border: 1px solid currentColor;
  border-radius: 8px;
  padding: 5px;
  width: 100%;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }
`;

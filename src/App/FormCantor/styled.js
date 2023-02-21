import styled, { css } from "styled-components";

export const FieldSet = styled.fieldset`
  background-color: rgb(244 232 97);
  border-radius: 8px;
  max-width: 550px;
`;

export const Select = styled.select`
  border-radius: 8px;
  width: 150px;
  padding: 4px;
  margin: 3px;

  ${({ width }) =>
    width &&
    css`
      width: 210px;
      border: 1px solid currentColor;
    `}

  &:hover {
    background-color: hsl(55, 87%, 87%);
  }
`;

export const Button = styled.button`
  background-color: rgb(244 232 97);
  border: 1px solid currentColor;
  border-radius: 8px;
  padding: 5px;
  width: 100%;

  &&:hover {
    background-color: hsl(55, 87%, 77%);
  }
`;

export const Paragraph = styled.p`
  && {
    margin: 0;
  }
`;

export const FontColor = styled.p`
  @media (max-width: 841px) {
    color: #ffffff;
  }
`;

// .form__paragraph--padding {
//     padding: 5px;
// }

import styled from "styled-components";

export const Legend = styled.legend`
  border: 1px solid currentColor;
  border-radius: 8px;
  background-color: rgb(244 232 97);
  padding: 5px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FlexItem = styled.p`
  padding: 0 5px;
  flex-basis: 50%;

  @media (max-width: 767px) {
    margin: 5px 0;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 5px;
`;

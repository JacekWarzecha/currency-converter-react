import styled from "styled-components";

export const Legend = styled.legend`
  border: 1px solid currentColor;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.interactiveAreas};
  padding: 5px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FlexItem = styled.p`
  flex-basis: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 5px 0;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
`;

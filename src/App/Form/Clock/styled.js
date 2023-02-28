import styled from "styled-components";

export const StyledClock = styled.div`
  max-width: 604px;
`;

export const Paragraph = styled.p`
  text-align: right;
  font-size: 12px;
  font-family: "Roboto Mono", sans-serif;
  color: ${({ theme }) => theme.color.doveGray};
`;

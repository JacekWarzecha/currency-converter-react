import { StyledResult, TargetAmount } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
        <TargetAmount>
          {result.targetAmount.toFixed(2)}&nbsp;
          {result.currency}
        </TargetAmount>
      </>
    )}
  </StyledResult>
);

import { StyledResult, TargetAmount } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)} PLN ={" "}
        <TargetAmount>
          {result.targetAmount.toFixed(2)}
          {result.currency}
        </TargetAmount>
      </>
    )}
  </StyledResult>
);

import { useState } from "react";
import { Clock } from "./Clock";
import { Legend, Flex, FlexItem, Paragraph } from "./styled";
import { FieldSet, Select } from "../FormCantor/styled";
import { TargetAmount } from "../FormCantor/Result/styled";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";

export const Form = () => {
  const [sharePrice, setSharePrice] = useState("");
  const [usdPrice, setUsdPrice] = useState("");

  const onSharePriceChange = ({ target }) => {
    setSharePrice(target.value);
  };

  const onUsdPriceChange = ({ target }) => {
    setUsdPrice(target.value);
  };

  const price = sharePrice * usdPrice;

  return (
    <ThemeProvider theme={theme}>
      <form>
        <Clock />
        <FieldSet>
          <Legend>Wprowadź parametry</Legend>
          <Flex>
            <FlexItem>
              <label>
                Kurs akcji:
                <Select
                  as="input"
                  value={sharePrice}
                  onChange={onSharePriceChange}
                  type="number"
                  required
                />
              </label>
            </FlexItem>
            <FlexItem>
              <label>
                Kurs USD:
                <Select
                  as="input"
                  value={usdPrice}
                  onChange={onUsdPriceChange}
                  type="number"
                  required
                />
              </label>
            </FlexItem>
          </Flex>
          <Paragraph>
            Koszt jednej akcji wynosi:
            <TargetAmount>
              {price < 0 ? "Tylko liczby dodatnie" : price.toFixed(2)}
            </TargetAmount>
          </Paragraph>
        </FieldSet>
      </form>
    </ThemeProvider>
  );
};

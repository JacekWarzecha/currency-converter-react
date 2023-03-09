import React, { useState } from "react";
import { Result } from "./Result";
import { FieldSet, Select, Button, Loading, Failure, Info } from "./styled";
import { useRatesData } from "./useRatesData";

export const FormCantor = () => {
  const [currency, setCurrency] = useState("USD");

  const ratesData = useRatesData();

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };

  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <p>Zamień swoje złotówki na wybraną walutę</p>
      {ratesData.state === "loading" ? (
        <Loading>Sekundka, pracuję nad tym.</Loading>
      ) : ratesData.state === "error" ? (
        <Failure>Sprawdź swoje połączenie.</Failure>
      ) : (
        <>
          <FieldSet>
            <p>
              <label>
                Wybierz walutę:
                <Select
                  value={currency}
                  onChange={onCurrencyChange}
                  wider="true"
                >
                  {Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Select>
              </label>
            </p>
            <p>
              <label>
                Wprowadź kwotę:
                <Select
                  as="input"
                  value={amount}
                  onChange={onAmountChange}
                  type="number"
                  min="0.01"
                  max="1000000000"
                  step="any"
                  required
                />
              </label>
              PLN
            </p>
            <div>
              <p>
                <Button>Oblicz</Button>
              </p>
              <Result result={result} />
            </div>
          </FieldSet>
          <Info>
            Kursy walut pochodzą z Europejskiego Banku Centralnego <br />
            Aktualne na dzień: <strong>{ratesData.date}</strong>
          </Info>
        </>
      )}
    </form>
  );
};

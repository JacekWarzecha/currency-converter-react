import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { FieldSet, Select, Button } from "./styled";

export const FormCantor = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);

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
      <FieldSet>
        <p>
          <label>
            Wybierz walutę:
            <Select value={currency} onChange={onCurrencyChange} wider="true">
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
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
    </form>
  );
};

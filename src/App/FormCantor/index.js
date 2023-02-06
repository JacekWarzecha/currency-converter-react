import "./style.css";
import React, { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";

const FormCantor = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);

  //tutaj natomiast zauważyłem, że niby uzyliśmy
  //useState(currencies[0].short);
  //ale i tak wyświetla się sugerowana pełna nazwa, zamiast skrót...
  //można też nie pisać nic za "currencies[0]" i działało by dalej tak samo

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
      <fieldset className="form__fieldset">
        <p>
          <label>
            Wybierz walutę:
            <select
              value={currency}
              onChange={onCurrencyChange}
              className="form__field form__field--width"
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            Wprowadź kwotę:
            <input
              value={amount}
              onChange={onAmountChange}
              type="number"
              className="form__field"
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
            <button className="form__button">Oblicz</button>
          </p>
          <Result result={result} />
        </div>
      </fieldset>
    </form>
  );
};
export default FormCantor;

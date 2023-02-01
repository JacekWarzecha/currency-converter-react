import "./style.css";
import React, { useState } from "react";
// import Result from ".Result"; tutaj

const FormCantor = () => {
  const currencies = [
    { id: 0, name: "" },
    { id: 1, name: "USD", rate: 4.35 },
    { id: 2, name: "CHF", rate: 4.75 },
    { id: 3, name: "EUR", rate: 4.7 },
  ];

  const [currency, setCurrency] = useState("");

  const [amount, setAmount] = useState("");

  const [result, setResult] = useState("");

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };

  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const calculate = () => setResult((result) => (result = amount / currency));

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculate(amount, currency);
  };

  return (
    <form onSubmit={onFormSubmit} className="js-form-cantor">
      <p>Zamień swoje złotówki na wybraną walutę</p>
      <fieldset className="form__fieldset">
        <p>
          <label>
            Wybierz walutę:
            <select
              value={currency}
              onChange={onCurrencyChange}
              className="js-currency form__field form__field--width"
            >
              {currencies.map((currency) => (
                <option key={currency.id} value={currency.rate}>
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
              className="js-amount form__field"
              min="0.01"
              max="1000000000"
              step="any"
              required
            />
          </label>
          PLN
        </p>
        <div className="flex">
          <p className="flex__item">
            <button className="form__button">Oblicz</button>
          </p>
          <p className="flex__item">
            = <strong className="js-score form__cost">{result}</strong>
          </p>
        </div>
      </fieldset>
    </form>
  );
};

export default FormCantor;

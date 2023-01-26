import "./style.css";
import { useState } from "react";

const FormCantor = () => {
  const [currency, setCurrency] = useState("");

  const [amount, setAmount] = useState("");

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };

  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  let result;

  const calculate = () => {
    const USD = 3.3;
    const EUR = 4.65;
    const CHF = 4.7;
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
              <option>USD</option>
              <option>EUR</option>
              <option>CHF</option>
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
            <button onClick={calculate} className="form__button">
              Oblicz
            </button>
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

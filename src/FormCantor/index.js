import "./style.css";
import { useState } from "react";

const FormCantor = () => {
  let [currency, setCurrency] = useState("");

  const [amount, setAmount] = useState("");

  const onCurrencyChange = ({ target }) => {
    setCurrency(target.value);
  };

  switch (currency) {
    case "USD":
      currency = 4.35;
      break;
    case "CHF":
      currency = 4.75;
      break;
    case "EUR":
      currency = 4.7;
  }

  // if (currency === "USD") {
  //   rate === 4.35;
  // } else if (currency === "CHF") {
  //   rate === 4.75;
  // } else {
  //   rate === 4.7;
  // }

  const onAmountChange = ({ target }) => {
    setAmount(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculate(amount * currency);
  };

  let result;

  const calculate = (amount, currency) => amount * currency === result;

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
            <button
              // onClick={calculate(amount * currency)}
              className="form__button"
            >
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

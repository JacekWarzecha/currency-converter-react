import { useState } from "react";

const Form10 = () => {
  const [sharePrice1, setSharePrice1] = useState("");

  const [usdPrice1, setUsdPrice1] = useState("");

  const [result, setResult] = useState("");

  const onSharePriceChange1 = ({ target }) => {
    setSharePrice1(target.value);
  };

  const onUsdPriceChange1 = ({ target }) => {
    setUsdPrice1(target.value);
  };
  const calculate = () =>
    setResult((result) => (result = sharePrice1 * usdPrice1));

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculate();
    setSharePrice1("");
    setUsdPrice1("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <p>
        <button>Ile panie?</button>
      </p>
      <p>
        Oblicz ile zapłacisz za jedną akcję w <strong>PLN</strong> w zależności
        od kursu akcji oraz kursu USD
      </p>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Wprowadź parametry</legend>
        <div className="flex">
          <p className="flex__item">
            <label>
              Kurs akcji:
              <input
                value={sharePrice1}
                onChange={onSharePriceChange1}
                type="number"
                className="form__field"
                required
              />
            </label>
          </p>
          <p className="flex__item">
            <label>
              Kurs USD:
              <input
                value={usdPrice1}
                onChange={onUsdPriceChange1}
                type="number"
                className="js-exchange form__field"
                required
              />
            </label>
          </p>
        </div>

        <p className="form__paragraph form__paragraph--padding">
          Koszt jednej akcji wynosi:
          <strong value={result} className="form__cost">
            {result}
          </strong>
        </p>
      </fieldset>
    </form>
  );
};

export default Form10;

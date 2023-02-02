import "./style.css";
import { useState } from "react";

const Form = () => {
  const [sharePrice, setSharePrice] = useState("");

  const [usdPrice, setUsdPrice] = useState("");

  const onSharePriceChange = ({ target }) => {
    setSharePrice(target.value);
  };

  const onUsdPriceChange = ({ target }) => {
    setUsdPrice(target.value);
  };

  let price = sharePrice * usdPrice;

  if (price < 0) {
    price = "tylko liczby dodatnie";
  }

  return (
    <form className="form">
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
                value={sharePrice}
                onChange={onSharePriceChange}
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
                value={usdPrice}
                onChange={onUsdPriceChange}
                type="number"
                className="js-exchange form__field"
                required
              />
            </label>
          </p>
        </div>
        <p className="form__paragraph form__paragraph--padding">
          Koszt jednej akcji wynosi:
          <strong className="form__cost">{price.toFixed(2)}</strong>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;

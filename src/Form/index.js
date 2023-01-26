import "./style.css";

const Form = () => (
  <form class="js-form form">
    <p>
      Oblicz ile zapłacisz za jedną akcję w <strong>PLN</strong> w zależności od
      kursu akcji oraz kursu USD
    </p>
    <fieldset class="form__fieldset">
      <legend class="form__legend">Wprowadź parametry</legend>
      <div class="flex">
        <p class="flex__item">
          <label>
            Kurs akcji:
            <input
              name="quotes"
              type="number"
              class="js-quotes form__field"
              required
            />
          </label>
        </p>
        <p class="flex__item">
          <label>
            Kurs USD:
            <input
              name="exchange"
              type="number"
              class="js-exchange form__field"
              required
            />
          </label>
        </p>
      </div>
      <p class="form__paragraph form__paragraph--padding">
        Koszt jednej akcji wynosi:
        <strong class="js-cost form__cost">n/a</strong>
      </p>
    </fieldset>
  </form>
);

export default Form;

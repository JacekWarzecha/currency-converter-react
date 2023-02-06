import "./style.css";

export const Result = ({ result }) => (
  <p className="result">
    {result !== undefined && (
      <>
        {result.sourceAmount.toFixed(2)} PLN ={" "}
        <strong className="result__targetAmount">
          {result.targetAmount.toFixed(2)}
          {result.currency}
        </strong>
      </>
      // ciekawi mminie skąd tutaj {result.currency} bierze się wyświetlanie tak naprawdę
      // short, skrót waluty, a tego nie napisaliśmy że np. result.currency.short..
      // chyba stąd, że currency ma value currency.short?
      // a jeśli tak to dlaczego domyślnie jest 'dolar amerykański' wyswietlany,
      // zamiast USD ?
    )}
  </p>
);

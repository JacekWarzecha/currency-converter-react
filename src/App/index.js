import { useState } from "react";
import Form from "./Form";
import FormCantor from "./FormCantor";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;
    //rozumiem, że poprostu szukamy waluty, która ma dany 'short'
    //a short ten wział się z value=currency.short?

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div>
      <Form />

      <FormCantor result={result} calculateResult={calculateResult} />
    </div>
  );
}

export default App;

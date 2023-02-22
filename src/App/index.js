import { useState } from "react";
import { Form } from "./Form";
import { FormCantor } from "./FormCantor";
import { currencies } from "./currencies";
import { GlobalStyle } from "../GlobalStyle";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <div>
      <GlobalStyle />
      <Form />
      <FormCantor result={result} calculateResult={calculateResult} />
    </div>
  );
}

export default App;

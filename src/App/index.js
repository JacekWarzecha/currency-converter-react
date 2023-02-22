import { useState } from "react";
import { Form } from "./Form";
import { FormCantor } from "./FormCantor";
import { currencies } from "./currencies";
import { GlobalStyle } from "../GlobalStyle";
import { Container } from "./Container";

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
    <Container>
      <GlobalStyle />
      <Form />
      <FormCantor result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;

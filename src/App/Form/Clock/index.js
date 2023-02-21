import { useEffect, useState } from "react";
import { StyledClock, Paragraph } from "./styled";

const formatDate = (date) =>
  date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <StyledClock>
      <Paragraph>Dzisiaj jest {formatDate(date)}</Paragraph>
      <p>
        Oblicz koszt jednej akcji w <strong>PLN</strong> w zależności od kursów
        akcji i USD
      </p>
    </StyledClock>
  );
};
import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

const formatDate = (date) =>
  date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export const DateToday = () => {
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
    <div className="dateToday">
      <p className="dateToday__paragraph">Dzisiaj jest {formatDate(date)}</p>
      <p>
        Oblicz koszt jednej akcji w <strong>PLN</strong> w zależności od kursów
        akcji i USD
      </p>
    </div>
  );
};

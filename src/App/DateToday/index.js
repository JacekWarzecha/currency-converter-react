import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export const DateToday = () => {
  const dateImmediately = new Date().toLocaleDateString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  let [date1, setDate1] = useState(dateImmediately);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate1(
        () =>
          (date1 = new Date().toLocaleDateString("pl", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }))
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="dateToday">
      <p className="dateToday__paragraph">Dzisiaj jest {date1}</p>
      <p>
        Oblicz koszt jednej akcji w <strong>PLN</strong> w zależności od kursów
        akcji i USD
      </p>
    </div>
  );
};

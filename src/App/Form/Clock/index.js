import { StyledClock, Paragraph } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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
  const date = useCurrentDate();

  return (
    <StyledClock>
      <Paragraph>Dzisiaj jest {formatDate(date)}</Paragraph>
      <p>
        Oblicz koszt akcji w <strong>PLN</strong> w zależności od kursów akcji i
        USD
      </p>
    </StyledClock>
  );
};

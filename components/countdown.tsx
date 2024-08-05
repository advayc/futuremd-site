import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "2024-11-23";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30; // Approximation, can vary based on the actual month

type Units = "Month" | "Day" | "Hour" | "Minute" | "Second";

const Countdown = () => {
  const { month, day, hour, minute, second } = useTimeLeft();

  return (
    <div className="p-4">
      <div className="mx-auto flex flex-wrap w-full max-w-5xl items-center justify-center">
        {month > 0 && <CountdownItem unit="Month" text="months" time={month} />}
        {day > 0 && <CountdownItem unit="Day" text="days" time={day} />}
        {hour > 0 && <CountdownItem unit="Hour" text="hours" time={hour} />}
        {minute > 0 && <CountdownItem unit="Minute" text="minutes" time={minute} />}
        {second > 0 && <CountdownItem unit="Second" text="seconds" time={second} />}
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text, time }: { unit: Units; text: string; time: number }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-1 w-1/2 md:w-1/4 lg:w-1/6 font-mono md:h-36 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl dark:text-hov text-li md:text-4xl lg:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-sm text-nay dark:text-white md:text-lg lg:text-base">
        {text}
      </span>
    </div>
  );
};

export default Countdown;

const useTimeLeft = () => {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(updateTimeLeft, 1000);
    updateTimeLeft(); // Initial call to set the state immediately

    return () => clearInterval(interval);
  }, []);

  const updateTimeLeft = () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    setMonth(Math.floor(distance / MONTH));
    setDay(Math.floor((distance % MONTH) / DAY));
    setHour(Math.floor((distance % DAY) / HOUR));
    setMinute(Math.floor((distance % HOUR) / MINUTE));
    setSecond(Math.floor((distance % MINUTE) / SECOND));
  };

  return { month, day, hour, minute, second };
};

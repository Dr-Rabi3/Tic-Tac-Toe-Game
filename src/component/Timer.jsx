import { useEffect, useState } from "react";

export default function Timer({ timeOut, onTimeOut }) {
  const [remainingTimeout, setRemainingTimeout] = useState(timeOut);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, 1000 * timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTimeout((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <p>{remainingTimeout}</p>;
}

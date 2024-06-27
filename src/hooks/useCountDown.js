import { useEffect, useState } from "react";

export default function useCountDown() {
  const [time, setTime] = useState(60);
  const [resendLink, setResendLink] = useState(false);

  function stopTimer(handleCountDown) {
    clearInterval(handleCountDown);
  }

  function startTimer() {
    setTime(() => 60);
    setResendLink(true);
  }

  useEffect(() => {
    const handleCountDown = setInterval(() => {
      time > 0 && setTime((el) => el - 1);
    }, [1000]);

    time === 0 && !resendLink && stopTimer(handleCountDown);

    return () => clearInterval(handleCountDown);
  }, [time, resendLink]);
  return { time, startTimer };
}

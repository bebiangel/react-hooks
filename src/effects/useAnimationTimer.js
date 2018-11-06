import { useState, useEffect } from "react";

export function useAnimationTimer(duration = 1000, delay = 0) {
  //
  const [elapsed, setTime] = useState(0);

  useEffect(() => {
    let animationFrame, timerStop, start;

    // 각각의 animation이 실행되도록 하는 함수
    function onFrame() {
      setTime(Date.now() - start);
      loop();
    }

    function loop() {}
  });
}

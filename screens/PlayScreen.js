import { useState, useEffect } from "react";
import { Layer } from "../components/Layer";
import { Settings } from "../components/common/Settings";
import { TrackMark } from "../components/common/TrackMark";
import { Ionicons, Entypo } from "@expo/vector-icons";
import SoundPlayer from "../components/common/Sound";

export default function PlayScreen({ setBlockSwiper, blockSwiper }) {
  const soundPlayer = SoundPlayer();
  const [allTimers, setAllTimers] = useState({
    play: 0,
    pause: 0,
  });

  const [pauseBtn, setPauseBtn] = useState(false);
  const [timePlayBtn, setTimePlayBtn] = useState(false);

  const [timeLeft, setTimeLeft] = useState(allTimers.play);
  const [pauseTimeLeft, setPauseTimeLeft] = useState(allTimers.pause);

  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(true);

  function startTimer() {
    soundPlayer.play();
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setIsRunning(false);
        setIsPause(true);
        soundPlayer.stop();
      }
    }, 1000);

    return timer;
  }

  function pauseTimer() {
    soundPlayer.stop();
    const timer = setTimeout(() => {
      if (pauseTimeLeft > 0) {
        setPauseTimeLeft(pauseTimeLeft - 1);
      } else {
        setIsPause(false);
        setTimeLeft(allTimers.play);
      }
    }, 1000);

    return timer;
  }

  useEffect(() => {
    let timer;

    if (isRunning && !isPause) {
      timer = startTimer();
    } else if (isRunning && isPause) {
      timer = pauseTimer();
    }

    return () => clearTimeout(timer);
  }, [isRunning, isPause, timeLeft, pauseTimeLeft]);

  const handleClick = () => {
    if (isRunning) {
      reset();
      return;
    }
    if (allTimers.pause > 0 && allTimers.play > 0) {
      setIsRunning(true);
      setPauseTimeLeft(allTimers.pause);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setIsPause(true);
    setAllTimers({
      play: 0,
      pause: 0,
    });
    setTimeLeft(0);
    setPauseTimeLeft(0);
    soundPlayer.stop();
  };

  const onPressTimePlay = () => {
    setTimePlayBtn(!timePlayBtn);
    setBlockSwiper(!blockSwiper);
  };

  const onPressPause = () => {
    setPauseBtn(!pauseBtn);
    setBlockSwiper(!blockSwiper);
  };

  return (
    <Layer
      handleClick={handleClick}
      isRunning={isRunning}
      time={isPause ? pauseTimeLeft : timeLeft}
      titleLayer={"Play"}
    >
      {
        <>
          <Settings
            activeTime={isRunning && isPause}
            stateBtn={!pauseBtn}
            titleCounter={"Time for pause"}
            counterValue={allTimers.pause}
            sliderChangeValue={(value) =>
              setAllTimers({ ...allTimers, pause: value })
            }
            sliderTrackMark={() => <TrackMark>{allTimers.pause}</TrackMark>}
            sliderMaxValue={12}
            sliderStep={1}
            onPressSettings={onPressPause}
            iconSettings={
              <Entypo name="back-in-time" size={24} color="black" />
            }
          />
          <Settings
            activeTime={isRunning && !isPause}
            stateBtn={!timePlayBtn}
            titleCounter={"Time for play"}
            counterValue={allTimers.play}
            sliderChangeValue={(value) =>
              setAllTimers({ ...allTimers, play: value })
            }
            sliderTrackMark={() => <TrackMark>{allTimers.play}</TrackMark>}
            sliderMaxValue={120}
            sliderStep={1}
            onPressSettings={onPressTimePlay}
            iconSettings={
              <Ionicons name="ios-timer-outline" size={24} color="black" />
            }
          />
        </>
      }
    </Layer>
  );
}

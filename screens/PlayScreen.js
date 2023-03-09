import { useState, useEffect } from "react";
import { Layer } from "../components/Layer";
import { Settings } from "../components/common/Settings";
import { TrackMark } from "../components/common/TrackMark";
import { Ionicons, Entypo } from "@expo/vector-icons";

export default function PlayScreen({ setBlockSwiper, blockSwiper }) {
  const [pauseBtn, setPauseBtn] = useState(false);
  const [pause, setPause] = useState(0);

  const [timePlayBtn, setTimePlayBtn] = useState(false);
  const [timePlay, setTimePlay] = useState(0);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    reset();
  }, [time]);

  const handleClick = () => {
    if (timePlay) {
      setIsRunning((isRunning) => !isRunning);
    }
    if (!isRunning) {
      setTime(timePlay);
    } else {
      reset();
    }
  };

  const reset = () => {
    setTimePlay(0);
    setPause(0);
    setTime(0);
    setIsRunning(false);
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
      time={time}
      titleLayer={"Play"}
    >
      {
        <>
          <Settings
            stateBtn={!pauseBtn}
            titleCounter={"Time for pause"}
            counterValue={pause}
            sliderChangeValue={setPause}
            sliderTrackMark={() => <TrackMark>{pause}</TrackMark>}
            sliderMaxValue={12}
            sliderStep={1}
            onPressSettings={onPressPause}
            iconSettings={
              <Entypo name="back-in-time" size={24} color="black" />
            }
          />
          <Settings
            stateBtn={!timePlayBtn}
            titleCounter={"Time for play"}
            counterValue={timePlay}
            sliderChangeValue={setTimePlay}
            sliderTrackMark={() => <TrackMark>{timePlay}</TrackMark>}
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

import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Settings } from "../../components/common/Settings";
import { TrackMark } from "../../components/common/TrackMark";
import { Layer } from "../../components/Layer";

export default function TrainingScreen({ setBlockSwiper, blockSwiper }) {
  const [exerciseBtn, setExerciseBtn] = useState(false);
  const [exerciseTime, setExerciseTime] = useState(0);

  const [pauseBtn, setPauseBtn] = useState(false);
  const [pause, setPause] = useState(0);

  const [repeatBtn, setRepeatBtn] = useState(false);
  const [repeat, setRepeat] = useState(0);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const repeatCounter = () => {
    if (repeat > 0) {
      setTime(exerciseTime);
      setRepeat(repeat - 1);
    } else {
      reset();
    }
  };

  useEffect(() => {
    if (time > 0 && repeat > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    repeatCounter();
  }, [time]);

  const handleClick = () => {
    if (exerciseTime && repeat) {
      setIsRunning((isRunning) => !isRunning);
    }
    if (!isRunning) {
      setTime(exerciseTime);
    } else {
      reset();
    }
  };

  const reset = () => {
    setExerciseTime(0);
    setTime(0);
    setRepeat(0);
    setIsRunning(false);
  };

  const onPressExercise = () => {
    setExerciseBtn(!exerciseBtn);
    setBlockSwiper(!blockSwiper);
  };
  const onPressPause = () => {
    setPauseBtn(!pauseBtn);
    setBlockSwiper(!blockSwiper);
  };
  const onPressRepeat = () => {
    setRepeatBtn(!repeatBtn);
    setBlockSwiper(!blockSwiper);
  };

  return (
    <Layer
      handleClick={handleClick}
      isRunning={isRunning}
      time={time}
      titleLayer={"Training"}
    >
      {
        <>
          <Settings
            stateBtn={!exerciseBtn}
            titleCounter={"Time for exercise"}
            counterValue={exerciseTime}
            sliderChangeValue={setExerciseTime}
            sliderTrackMark={() => <TrackMark>{exerciseTime}</TrackMark>}
            sliderMaxValue={120}
            sliderStep={1}
            onPressSettings={onPressExercise}
            iconSettings={
              <Ionicons name="ios-timer-outline" size={24} color="black" />
            }
          />

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
              <MaterialIcons name="timer" size={24} color="black" />
            }
          />

          <Settings
            stateBtn={!repeatBtn}
            titleCounter={"Repeat"}
            counterValue={repeat}
            sliderChangeValue={setRepeat}
            sliderTrackMark={() => <TrackMark>{repeat}</TrackMark>}
            sliderMaxValue={12}
            sliderStep={1}
            onPressSettings={onPressRepeat}
            iconSettings={
              <Entypo name="back-in-time" size={24} color="black" />
            }
          />
        </>
      }
    </Layer>
  );
}

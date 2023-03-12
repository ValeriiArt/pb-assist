import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Settings } from "../components/common/Settings";
import { TrackMark } from "../components/common/TrackMark";
import { Layer } from "../components/Layer";
// import Timer from "../components/Timer";
import SoundPlayer from "../components/common/Sound";

export default function TrainingScreen({ setBlockSwiper, blockSwiper }) {
  const soundPlayer = SoundPlayer();
  const [exerciseBtn, setExerciseBtn] = useState(false);
  const [exerciseTime, setExerciseTime] = useState(0);

  const [pauseBtn, setPauseBtn] = useState(false);
  const [pauseTime, setPause] = useState(0);

  const [repeatBtn, setRepeatBtn] = useState(false);
  const [repeat, setRepeat] = useState(0);

  // const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(true);

  const [timeLeft, setTimeLeft] = useState(exerciseTime);

  // const [repetitionsLeft, setRepetitionsLeft] = useState(repeat);

  const [pauseTimeLeft, setPauseTimeLeft] = useState(pauseTime);

  // ------------------------------------------------------
  // let timer;

  // useEffect(() => {
  //   if (isRunning) {
  //     for (let i = 0; i < repeat; i++) {
  //       for (let j = 0; j < exerciseTime; j++) {
  //         delayExerciseTime(j);
  //       }
  //       for (let k = 0; k < pauseTime; k++) {
  //         delayPauseTime(k);
  //       }
  //     }
  //   }
  // }, [isRunning]);

  // function delayExerciseTime(j) {
  //   timer = setTimeout(() => {
  //     setTime(j);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }

  // function delayPauseTime(k) {
  //   timer = setTimeout(() => {
  //     setTime(k);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }
  // ---------------------------------------------------

  useEffect(() => {
    let timer;
    if (isRunning && !isPause) {
      soundPlayer.play();
      timer = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          if (repeat > 0) {
            setIsPause(true);
            setPauseTimeLeft(pauseTime);
          }
          setRepeat(repeat - 1);
          setTimeLeft(exerciseTime);
        }
      }, 1000);
    } else if (isRunning && isPause) {
      soundPlayer.stop();
      timer = setTimeout(() => {
        if (pauseTimeLeft > 0) {
          setPauseTimeLeft(pauseTimeLeft - 1);
        } else {
          setIsPause(false);
          setTimeLeft(exerciseTime);
        }
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [
    timeLeft,
    isRunning,
    isPause,
    exerciseTime,
    pauseTimeLeft,
    pauseTime,
    repeat,
  ]);

  useEffect(() => {
    if (repeat === 0 && isRunning) {
      reset();
    }
  }, [repeat]);

  const handleStartStop = () => {
    if (isRunning) {
      reset();
    }
    if (repeat > 0 && pauseTime > 0 && exerciseTime > 0) {
      setIsRunning(true);
      setPauseTimeLeft(pauseTime);
    }
  };

  const reset = () => {
    setIsRunning(false);
    setIsPause(true);
    setExerciseTime(0);
    setPause(0);
    setRepeat(0);
    // setTime(0);
    setTimeLeft(0);
    setPauseTimeLeft(0);
    // soundPlayer.stop();
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
      handleClick={handleStartStop}
      isRunning={isRunning}
      time={isPause ? pauseTimeLeft : timeLeft}
      // time={time}
      titleLayer={"Training"}
    >
      {/* <Timer
        duration={exerciseTime}
        pauseDuration={pause}
        repetitions={repeat}
        setExerciseTime={setExerciseTime}
        setPause={setPause}
        setRepeat={setRepeat}
      /> */}
      {
        <>
          <Settings
            activeTime={isRunning && !isPause}
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
            activeTime={isRunning && isPause}
            stateBtn={!pauseBtn}
            titleCounter={"Time for pause"}
            counterValue={pauseTime}
            sliderChangeValue={setPause}
            sliderTrackMark={() => <TrackMark>{pauseTime}</TrackMark>}
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

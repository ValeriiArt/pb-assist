import { View, Text, StyleSheet, Pressable } from "react-native";

import React, { useState, useEffect } from "react";

// const Timer = ({ duration, pauseDuration, repetitions }) => {
//   const [timeLeft, setTimeLeft] = useState(duration);
//   const [isPaused, setIsPaused] = useState(false);
//   const [repetitionsLeft, setRepetitionsLeft] = useState(repetitions);
//   const [isPauseTime, setIsPauseTime] = useState(false);

//   useEffect(() => {
//     if (timeLeft === 0 && repetitionsLeft > 0) {
//       setIsPaused(true);
//       setIsPauseTime(true);
//       setRepetitionsLeft(repetitionsLeft - 1);
//       setTimeout(() => {
//         setIsPaused(false);
//         setIsPauseTime(false);
//         setTimeLeft(duration);
//       }, pauseDuration * 1000);
//     } else if (!isPaused) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft, isPaused, repetitionsLeft]);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   const pauseMinutes = Math.floor(pauseDuration / 60);
//   const pauseSeconds = pauseDuration % 60;

//   return (
//     <div>
//       <h2>Timer</h2>
//       {repetitionsLeft === 0 ? (
//         <p>Timer completed!</p>
//       ) : isPaused && isPauseTime ? (
//         <p>
//           {pauseMinutes}:{pauseSeconds < 10 ? `0${pauseSeconds}` : pauseSeconds}
//         </p>
//       ) : (
//         <p>
//           {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Timer;

// import React, { useState, useEffect } from 'react';

// const Timer = ({ duration, pauseDuration, repetitions }) => {
//   const [timeLeft, setTimeLeft] = useState(duration);
//   const [isPaused, setIsPaused] = useState(false);
//   const [repetitionsLeft, setRepetitionsLeft] = useState(repetitions);

//   useEffect(() => {
//     if (timeLeft === 0 && repetitionsLeft > 0) {
//       setIsPaused(true);
//       setRepetitionsLeft(repetitionsLeft - 1);
//       setTimeout(() => {
//         setIsPaused(false);
//         setTimeLeft(duration);
//       }, pauseDuration * 1000);
//     } else if (!isPaused) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [timeLeft, isPaused, repetitionsLeft]);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div>
//       <h2>Timer</h2>
//       {repetitionsLeft === 0 ? (
//         <p>Timer completed!</p>
//       ) : (
//         <p>
//           {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Timer;

// import React, { useState, useEffect } from "react";

// const Timer = ({ duration, pauseDuration, repetitions }) => {
//   const [timeLeft, setTimeLeft] = useState(duration);
//   const [isPaused, setIsPaused] = useState(true);
//   const [repetitionsLeft, setRepetitionsLeft] = useState(repetitions);
//   const [isPauseTime, setIsPauseTime] = useState(false);

//   const handleStart = () => {
//     setIsPaused(false);
//   };

//   useEffect(() => {
//     if (!isPaused) {
//       if (timeLeft === 0 && repetitionsLeft > 0) {
//         setIsPaused(true);
//         setIsPauseTime(true);
//         setRepetitionsLeft(repetitionsLeft - 1);
//         setTimeout(() => {
//           setIsPaused(false);
//           setIsPauseTime(false);
//           setTimeLeft(duration);
//         }, pauseDuration * 1000);
//       } else {
//         const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [timeLeft, isPaused, repetitionsLeft]);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   const pauseMinutes = Math.floor(pauseDuration / 60);
//   const pauseSeconds = pauseDuration % 60;

//   return (
//     <div>
//       <h2>Timer</h2>
//       <p>
//         {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//       </p>
//       {isPaused && repetitionsLeft > 0 && !isPauseTime && (
//         <button onClick={handleStart}>Start</button>
//       )}
//       {repetitionsLeft === 0 && <p>Timer completed!</p>}
//       {isPaused && repetitionsLeft > 0 && isPauseTime && (
//         <p>
//           {pauseMinutes}:{pauseSeconds < 10 ? `0${pauseSeconds}` : pauseSeconds}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Timer;

const Timer = ({
  duration,
  pauseDuration,
  repetitions,
  setExerciseTime,
  setPause,
  setRepeat,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [repetitionsLeft, setRepetitionsLeft] = useState(repetitions);
  const [pauseTimeLeft, setPauseTimeLeft] = useState(pauseDuration);

  useEffect(() => {
    let timer;
    if (isRunning && !isPause) {
      timer = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          if (repetitionsLeft > 1) {
            setIsPause(true);
            setPauseTimeLeft(pauseDuration);
          }
          setRepetitionsLeft(repetitionsLeft - 1);
          setTimeLeft(duration);
        }
      }, 1000);
    } else if (isRunning && isPause) {
      timer = setTimeout(() => {
        if (pauseTimeLeft > 0) {
          setPauseTimeLeft(pauseTimeLeft - 1);
        } else {
          setIsPause(false);
          setTimeLeft(duration);
        }
      }, 1000);
    }
    // if (repetitionsLeft === 0) {
    //   setIsRunning(false);
    //   setExerciseTime(0);
    //   setPause(0);
    //   setRepeat(0);
    // }
    return () => clearTimeout(timer);
  }, [
    timeLeft,
    isRunning,
    isPause,
    duration,
    pauseTimeLeft,
    pauseDuration,
    repetitionsLeft,
  ]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setExerciseTime(0);
      setPause(0);
      setRepeat(0);
      //   setTimeLeft(duration);
      //   setPauseTimeLeft(pauseDuration);
      //   setRepetitionsLeft(repetitions);
    } else {
      setIsRunning(true);
    }
  };

  return (
    <View>
      {isPause ? (
        <Text>Pause: {pauseTimeLeft}s</Text>
      ) : (
        <Text>Time: {timeLeft}s</Text>
      )}
      <View style={styles.startBtnContainer}>
        <Pressable onPress={handleStartStop} style={styles.button}>
          {isRunning ? <Text>Stop</Text> : <Text>Start</Text>}
        </Pressable>
      </View>
      {repetitionsLeft === 0 && <Text>Timer completed!</Text>}
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    marginBottom: 70,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 50,
    width: 90,
    height: 90,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

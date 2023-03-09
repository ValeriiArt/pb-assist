import { Text, View, Pressable } from "react-native";
import { Button } from "../../components/Button/Button";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import { useState, useEffect } from "react";

import {
  styles,
  componentThumbStyles,
  customStyles,
} from "./TrainingScreen.styled";

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

  const valueExercise = (e) => {
    setExerciseTime(e);
  };

  const valuePause = (e) => {
    setPause(e);
  };
  const valueRepeat = (e) => {
    setRepeat(e);
  };

  const TrackMarkExercise = () => (
    <View style={componentThumbStyles.container}>
      <Text style={componentThumbStyles.text}>{exerciseTime}</Text>
    </View>
  );

  const TrackMarkRepeat = () => (
    <View style={{}}>
      <Text style={componentThumbStyles.text}>{repeat}</Text>
    </View>
  );

  const TrackMarkPause = () => (
    <View style={componentThumbStyles.container}>
      <Text style={componentThumbStyles.text}>{pause}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Training</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{time}s</Text>
        </View>

        <View style={styles.settings}>
          {!exerciseBtn ? (
            <>
              <View style={styles.titleCounter}>
                <Text style={styles.titleCounter}>Time for exercise</Text>
              </View>
              <View style={styles.counterSettings}>
                <Text style={styles.counterSettings}>{exerciseTime}s</Text>
              </View>
            </>
          ) : (
            <Slider
              containerStyle={componentThumbStyles.container}
              value={exerciseTime}
              onValueChange={valueExercise}
              animateTransitions
              renderThumbComponent={() => {}}
              renderTrackMarkComponent={TrackMarkExercise}
              trackStyle={customStyles.track}
              maximumValue={120}
              step={1}
            />
          )}

          <Pressable style={styles.iconBtn} onPress={onPressExercise}>
            <Ionicons name="ios-timer-outline" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.settings}>
          {!pauseBtn ? (
            <>
              <View style={styles.titleCounter}>
                <Text style={styles.titleCounter}>Pause time</Text>
              </View>
              <View style={styles.counterSettings}>
                <Text style={styles.counterSettings}>{pause}s</Text>
              </View>
            </>
          ) : (
            <Slider
              containerStyle={componentThumbStyles.container}
              value={pause}
              onValueChange={valuePause}
              animateTransitions
              renderThumbComponent={() => {}}
              renderTrackMarkComponent={TrackMarkPause}
              trackStyle={customStyles.track}
              maximumValue={60}
              step={1}
            />
          )}
          <Pressable style={styles.iconBtn} onPress={onPressPause}>
            <MaterialIcons name="timer" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.settings}>
          {!repeatBtn ? (
            <>
              <View style={styles.titleCounter}>
                <Text style={styles.titleCounter}>Repeat</Text>
              </View>
              <View style={styles.counterSettings}>
                <Text style={styles.counterSettings}>{repeat}</Text>
              </View>
            </>
          ) : (
            <Slider
              containerStyle={componentThumbStyles.container}
              value={repeat}
              onValueChange={valueRepeat}
              animateTransitions
              renderThumbComponent={() => {}}
              renderTrackMarkComponent={TrackMarkRepeat}
              trackStyle={customStyles.track}
              maximumValue={13}
              step={1}
            />
          )}
          <Pressable style={styles.iconBtn} onPress={onPressRepeat}>
            <Entypo name="back-in-time" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={styles.startBtnContainer}>
        <Button
          label={isRunning ? "STOP" : "START"}
          handleClick={handleClick}
        />
      </View>
    </View>
  );
}

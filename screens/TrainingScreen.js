import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "../components/Button/Button";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import { useState } from "react";

export default function TrainingScreen({ setTest, test }) {
  const [exerciseBtn, setExerciseBtn] = useState(false);
  const [pauseBtn, setPauseBtn] = useState(false);
  const [repeatBtn, setRepeatBtn] = useState(false);

  const [exercise, setExercise] = useState(0);
  const [pause, setPause] = useState(0);
  const [repeat, setRepeat] = useState(0);

  const handleClick = () => {
    return console.log("click btn");
  };

  const onPressExercise = () => {
    setExerciseBtn(!exerciseBtn);
    setTest(!test);
    // setPauseBtn(!pauseBtn);
    // setRepeatBtn(!repeatBtn);
  };
  const onPressPause = () => {
    setPauseBtn(!pauseBtn);
    setTest(!test);
    // setExerciseBtn(!exerciseBtn);
    // setRepeatBtn(!repeatBtn);
  };
  const onPressRepeat = () => {
    setRepeatBtn(!repeatBtn);
    setTest(!test);
    // setPauseBtn(!pauseBtn);
    // setExerciseBtn(!exerciseBtn);
  };

  const valueExercise = (e) => {
    setExercise(e);
  };
  const valuePause = (e) => {
    setPause(e);
  };
  const valueRepeat = (e) => {
    setRepeat(e);
  };

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
  const TrackMarkExercise = () => (
    <View style={componentThumbStyles.container}>
      <Text style={componentThumbStyles.text}>{exercise}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Training</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>39s</Text>
        </View>

        <View style={styles.settings}>
          {!exerciseBtn ? (
            <>
              <View style={styles.titleCounter}>
                <Text style={styles.titleCounter}>Time for exercise</Text>
              </View>
              <View style={styles.counterSettings}>
                <Text style={styles.counterSettings}>{exercise}s</Text>
              </View>
            </>
          ) : (
            <Slider
              containerStyle={componentThumbStyles.container}
              value={exercise}
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
        <Button label="START" handleClick={handleClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 30,
  },
  headerContainer: {
    marginTop: 80,
  },
  title: {
    fontSize: 36,
  },
  main: {
    width: "100%",
    marginTop: 30,
  },
  counterText: {
    textAlign: "center",
    fontSize: 42,
    fontWeight: 700,
  },
  settings: {
    justifyContent: "space-between",
    // alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  titleCounter: {
    flex: 1,
  },
  counterSettings: {
    flex: 1,
  },
  iconBtn: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#c0c0c0",
  },

  startBtnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

const componentThumbStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: 34,
  },
  text: {
    color: "#fff",
  },
});
const customStyles = StyleSheet.create({
  track: {
    borderRadius: 10,
    height: 34,
  },
});

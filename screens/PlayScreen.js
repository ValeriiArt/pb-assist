import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "../components/Button/Button";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import { useState, useEffect } from "react";

export default function PlayScreen({ setBlockSwiper, blockSwiper }) {
  const [pauseBtn, setPauseBtn] = useState(false);
  const [pause, setPause] = useState(0);

  const [timePlayBtn, setTimePlayBtn] = useState(false);
  const [timePlay, setTimePlay] = useState(0);

  const [time, setTime] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {}, [time]);

  const handleClick = () => {
    setTime(timePlay);
  };

  const valueTimePlay = (e) => {
    setTimePlay(e);
  };
  const onPressTimePlay = () => {
    setTimePlayBtn(!timePlayBtn);
    setBlockSwiper(!blockSwiper);
  };

  const TrackMarkTimePlay = () => (
    <View style={componentThumbStyles.container}>
      <Text style={componentThumbStyles.text}>{timePlay}</Text>
    </View>
  );

  const TrackMarkPause = () => (
    <View style={componentThumbStyles.container}>
      <Text style={componentThumbStyles.text}>{pause}</Text>
    </View>
  );
  const onPressPause = () => {
    setPauseBtn(!pauseBtn);
    setBlockSwiper(!blockSwiper);
  };
  const valuePause = (e) => {
    setPause(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Play</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{time}s</Text>
        </View>

        <View style={styles.settings}>
          {!timePlayBtn ? (
            <>
              <View style={styles.titleCounter}>
                <Text style={styles.titleCounter}>Time for play</Text>
              </View>
              <View style={styles.counterSettings}>
                <Text style={styles.counterSettings}>{timePlay}s</Text>
              </View>
            </>
          ) : (
            <Slider
              containerStyle={componentThumbStyles.container}
              value={timePlay}
              onValueChange={valueTimePlay}
              animateTransitions
              renderThumbComponent={() => {}}
              renderTrackMarkComponent={TrackMarkTimePlay}
              trackStyle={customStyles.track}
              maximumValue={60}
              step={1}
            />
          )}
          <Pressable style={styles.iconBtn} onPress={onPressTimePlay}>
            <Entypo name="back-in-time" size={24} color="black" />
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
    marginHorizontal: 20,
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
    // justifyContent: "space-between",
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

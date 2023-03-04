import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "../components/Button/Button";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export default function PlayScreen() {
  const handleClick = () => {
    return console.log("click btn");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Play</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>30s</Text>
        </View>
        <View style={styles.settings}>
          <View style={styles.titleCounter}>
            <Text style={styles.titleCounter}>Pause time</Text>
          </View>
          <View style={styles.counterSettings}>
            <Text style={styles.counterSettings}>30s</Text>
          </View>
          <Pressable
            style={styles.iconBtn}
            onPress={() => console.log("click pause time")}
          >
            <MaterialIcons name="timer" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.settings}>
          <View style={styles.titleCounter}>
            <Text style={styles.titleCounter}>Time for play</Text>
          </View>
          <View style={styles.counterSettings}>
            <Text style={styles.counterSettings}>0s</Text>
          </View>
          <Pressable
            style={styles.iconBtn}
            onPress={() => console.log("click time for play")}
          >
            <Entypo name="back-in-time" size={24} color="black" />
          </Pressable>
        </View>
        <View></View>
        <View></View>
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

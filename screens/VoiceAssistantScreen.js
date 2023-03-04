import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button } from "../components/Button/Button";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

export default function VoiceAssistantScreen() {
  const handleClick = () => {
    return console.log("click btn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Voice Assistant</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>39s</Text>
        </View>
        <View style={styles.settings}>
          <View style={styles.titleCounter}>
            <Text style={styles.titleCounter}>Time for exercise</Text>
          </View>
          <View style={styles.counterSettings}>
            <Text style={styles.counterSettings}>39s</Text>
          </View>
          <Pressable
            style={styles.iconBtn}
            onPress={() => console.log("click time for exercise")}
          >
            <Ionicons name="ios-timer-outline" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.settings}>
          <View style={styles.titleCounter}>
            <Text style={styles.titleCounter}>Repeat</Text>
          </View>
          <View style={styles.counterSettings}>
            <Text style={styles.counterSettings}>13</Text>
          </View>
          <Pressable
            style={styles.iconBtn}
            onPress={() => console.log("click repeat")}
          >
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
    // flex: 1,
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

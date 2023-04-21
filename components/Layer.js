import { Text, View, StyleSheet } from "react-native";
import { Button } from "./Button/Button";

export const Layer = ({
  handleClick,
  isRunning,
  time,
  titleLayer,
  children,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{titleLayer}</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{time} s</Text>
        </View>
      </View>
      {children}
      <View style={styles.startBtnContainer}>
        <Button
          label={isRunning ? "STOP" : "START"}
          handleClick={handleClick}
          isRunning={isRunning}
        />
      </View>
    </View>
  );
};

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

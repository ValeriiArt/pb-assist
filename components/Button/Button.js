import { StyleSheet, View, Pressable, Text } from "react-native";

export const Button = ({ label, handleClick }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => handleClick()}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

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
  //   buttonIcon: {
  //     backgroundColor: "#000",
  //     paddingRight: 8,
  //   },
  buttonLabel: {
    color: "#fff",
    fontSize: 20,
  },
});

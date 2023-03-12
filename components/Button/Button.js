import { StyleSheet, View, Pressable, Text } from "react-native";

export const Button = ({ label, handleClick, isRunning }) => {
  const { buttonContainer, button, buttonLabel } = styles(isRunning);
  return (
    <View style={buttonContainer}>
      <Pressable style={button} onPress={() => handleClick()}>
        <Text style={buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = (isRunning) =>
  StyleSheet.create({
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
      backgroundColor: !isRunning ? "#c0c0c0" : "#ff0000",
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

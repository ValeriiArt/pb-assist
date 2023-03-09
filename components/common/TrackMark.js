import { Text, View, StyleSheet } from "react-native";

export const TrackMark = ({ children }) => {
  return (
    <View style={componentThumbStyles.container}>
      <Text style={componentThumbStyles.text}>{children}</Text>
    </View>
  );
};

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

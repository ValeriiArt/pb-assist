import { Text, View, Pressable, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

export const Settings = ({
  stateBtn,
  titleCounter,
  counterValue,
  sliderChangeValue,
  sliderTrackMark,
  sliderMaxValue,
  sliderStep,
  onPressSettings,
  iconSettings,
}) => {
  return (
    <View style={styles.settings}>
      {stateBtn ? (
        <>
          <View style={styles.titleCounter}>
            <Text style={styles.titleCounter}>{titleCounter}</Text>
          </View>
          <View style={styles.counterSettings}>
            <Text style={styles.counterSettings}>{counterValue}s</Text>
          </View>
        </>
      ) : (
        <Slider
          containerStyle={componentThumbStyles.container}
          value={counterValue}
          onValueChange={sliderChangeValue}
          animateTransitions
          renderThumbComponent={() => {}}
          renderTrackMarkComponent={sliderTrackMark}
          trackStyle={customStyles.track}
          maximumValue={sliderMaxValue}
          step={sliderStep}
        />
      )}

      <Pressable
        style={styles.iconBtn}
        // onPress={() => onPressSettings(titleCounter)}
        onPress={onPressSettings}
      >
        {iconSettings}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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

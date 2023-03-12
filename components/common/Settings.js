import { Text, View, Pressable, StyleSheet } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

export const Settings = ({
  activeTime,
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
  const { settings, titleCounterStyle, counterSettings, iconBtn } =
    styles(activeTime);

  return (
    <View style={settings}>
      {stateBtn ? (
        <>
          <View style={titleCounterStyle}>
            <Text style={titleCounterStyle}>{titleCounter}</Text>
          </View>
          <View style={counterSettings}>
            <Text style={counterSettings}>{counterValue}s</Text>
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
        style={iconBtn}
        // onPress={() => onPressSettings(titleCounter)}
        onPress={onPressSettings}
      >
        {iconSettings}
      </Pressable>
    </View>
  );
};

const styles = (activeTime) =>
  StyleSheet.create({
    settings: {
      backgroundColor: activeTime ? "#c2c2c2" : "#fff",
      justifyContent: "space-between",
      flexDirection: "row",
      marginTop: 30,
      padding: 2,
      borderRadius: 10,
    },
    titleCounterStyle: {
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

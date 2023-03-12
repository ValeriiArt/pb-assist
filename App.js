import {
  View,
  StatusBar,
  Dimensions,
  StyleSheet,
  AppRegistry,
} from "react-native";
import Swiper from "react-native-swiper";
import PlayScreen from "./screens/PlayScreen";
import TrainingScreen from "./screens/TrainingScreen";
import VoiceAssistantScreen from "./screens/VoiceAssistantScreen";
import { useState } from "react";

export default function App() {
  // const { width, height } = Dimensions.get("window");
  const [blockSwiper, setBlockSwiper] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Swiper
        scrollEnabled={blockSwiper}
        style={styles.wrapper}
        dot={
          <View
            style={{
              backgroundColor: "rgba(215,215,215,.3)",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: "#808080",
              width: 13,
              height: 13,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        paginationStyle={{
          bottom: 30,
        }}
        loop={false}
      >
        <View style={styles.slide}>
          <TrainingScreen
            setBlockSwiper={setBlockSwiper}
            blockSwiper={blockSwiper}
          />
        </View>
        <View style={styles.slide}>
          <PlayScreen
            setBlockSwiper={setBlockSwiper}
            blockSwiper={blockSwiper}
          />
        </View>
        <View style={styles.slide}>
          <VoiceAssistantScreen
            setBlockSwiper={setBlockSwiper}
            blockSwiper={blockSwiper}
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
  },
});

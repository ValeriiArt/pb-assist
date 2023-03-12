import { Audio } from "expo-av";
import { useState, useEffect } from "react";

export default function SoundPlayer() {
  const [sound, setSound] = useState(null);

  async function loadSound() {
    console.log("Loading Sound");

    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/sounds/gudok.mov")
    );
    setSound(sound);
  }

  async function unloadSound() {
    console.log("Unloading Sound");
    sound && sound?.unloadAsync();
  }

  async function playSound() {
    if (!sound) {
      await loadSound();
    }

    console.log("Playing Sound");
    await sound?.playAsync();
  }

  async function stopSound() {
    console.log("Stopping Sound");
    await sound?.stopAsync();
  }

  useEffect(() => {
    return () => unloadSound();
  }, []);

  return {
    play: playSound,
    stop: stopSound,
  };
}

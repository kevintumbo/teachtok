import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function ActionBar() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/notes.png")} style={[styles.icon]} />
      <Image source={require("../assets/heart.png")} style={[styles.icon]} />
      <Image source={require("../assets/comment.png")} style={[styles.icon]} />
      <Image source={require("../assets/sidebar.png")} style={[styles.icon]} />
      <Image source={require("../assets/share.png")} style={[styles.icon]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "20%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
  },
  icon: {
    marginBottom: 20,
    width: 40,
    height: 40,
  },
});

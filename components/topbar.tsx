import React from "react";
import { StyleSheet, View } from "react-native";

export default function Topic() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginLeft: 10,
  },
  topic: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  chapter: {
    color: "white",
  },
});

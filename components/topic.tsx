import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Topic({ topic, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>{topic}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
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
  description: {
    color: "white",
  },
});

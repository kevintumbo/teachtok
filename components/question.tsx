import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Question(props) {
  const { question } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: "60%",
  },
  questionText: {
    textShadowColor: "black",
    backgroundColor: "black",
    color: "white",
    fontSize: 24,
    marginLeft: 10,
    width: "100%",
    height: "100%",
  },
});

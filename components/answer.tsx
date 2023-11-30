import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Pressable, Animated, Image } from "react-native";

export default function Answer({ option, fetchAnswer, id, correctAnswers }) {
  const rectangleHand = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(rectangleHand, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const [selectedAnswer, setSelectedAnswer] = useState();
  const { id: answer_id, answer } = option;
  const submitAnswer = async () => {
    await fetchAnswer(id);
    setSelectedAnswer(answer_id);
    fadeIn();
  };

  return (
    <View>
      <Pressable
        key={answer_id}
        style={
          selectedAnswer && correctAnswers[id] === answer_id
            ? styles.button_correct
            : !selectedAnswer && correctAnswers[id] === answer_id
              ? styles.button_correct
              : selectedAnswer && correctAnswers[id] !== answer_id
                ? styles.button_wrong
                : styles.button
        }
        onPress={() => submitAnswer()}
      >
        <Text style={styles.text}>{answer}</Text>
        <Animated.View
          style={[
            {
              opacity: rectangleHand,
            },
          ]}>
            {
              selectedAnswer && correctAnswers[id] === answer_id ? (
                <Image source={require("../assets/thumbup.svg")} style={[styles.icon]} />
              ) : selectedAnswer && correctAnswers[id] !== answer_id ? (
                <Image source={require("../assets/thumbdown.svg")} style={[styles.icon]} />
              ) : (<></>)
            }
      </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    opacity: 1,
    padding: 20,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 5,
    alignItems: "flex-start",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button_correct: {
    backgroundColor: "#28B18F",
    opacity: 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 5,
    alignItems: "flex-start",
    width: "80%",
  },
  button_wrong: {
    backgroundColor: "#DC5F5F",
    opacity: 1,
    padding: 20,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "flex-start",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    opacity: 1,
    textShadotextShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  icon: {
    width: 40,
    height: 40,
  },
});

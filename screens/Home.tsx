import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  Dimensions,
} from "react-native";

import ActionBar from "../components/actionbar";
import Answer from "../components/answer";
import Playlist from "../components/playlist";
import Question from "../components/question";
import Topic from "../components/topic";
import { getQuestion, getAnswer } from "../queries/queries";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    const fetchedQuestion = await getQuestion();
    setQuestions([...questions, fetchedQuestion]);
  };

  const fetchAnswer = async (id) => {
    const { correct_options } = await getAnswer(id);
    const correct_id = correct_options[0].id;
    if (!answers[id]) {
      const ans = { ...answers };
      ans[id] = correct_id;
      setAnswers(ans);
    }
    return correct_id;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, height: height - 10 }}>
        <FlatList
          data={questions}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          onEndReached={fetchQuestion}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ImageBackground
              source={questions[index]?.image}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.container}>
                <View style={styles.questionContainer}>
                  <Question question={item.question} />
                </View>
                <View style={styles.answersContainer}>
                  <View style={styles.answerslist}>
                    {item.options &&
                      item.options.map((option) => (
                        <Answer
                          key={questions[index].id}
                          option={option}
                          id={item.id}
                          fetchAnswer={fetchAnswer}
                          correctAnswers={answers}
                        />
                      ))}
                  </View>
                  <View style={styles.actionbarList}>
                    <ActionBar />
                  </View>
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Topic
                    topic={item.user.name}
                    description={item.description}
                  />
                </View>
                <View>
                  <Playlist playlist={item.playlist} />
                </View>
              </View>
            </ImageBackground>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: height - 50,
    flexDirection: "column",
  },
  questionContainer: {
    marginTop: 100,
    height: 145,
    justifyContent: 'flex-end'
  },
  answersContainer: {
    height: height - 390,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: 'flex-end'
  },
  answerslist: {
    width: "90%",
    justifyContent: 'flex-end',
    marginBottom: 50
  },
  actionbarList: {
    width: "10%",
  },
  itemWrapper: {
    width,
    height,
  },
  image: {
    flex: 1,
    height: height - 10,
  },
});

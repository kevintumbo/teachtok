import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavigationTabs from "./components/tabs";
import { TimeTracker } from "./utils";

const Stack = createStackNavigator();

export default function Routes() {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState();

  useEffect(() => {
    const id = setTimeout(() => {
      setEndTime(TimeTracker(startTime));
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen
            name="tabs"
            component={NavigationTabs}
            options={{
              title: "For you",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerRight: () => (
                <Image
                  source={require("./assets/magnifying_glass.png")}
                  style={[styles.icon]}
                />
              ),

              headerLeft: () => (
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("./assets/timer.png")}
                    style={[styles.icon]}
                  />
                  <Text style={{ color: "white", marginTop: 5 }}>
                    {endTime}
                  </Text>
                </View>
              ),
              headerTransparent: true,
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  icon: {
    margin: 5,
    width: 15,
    height: 15,
    
  },
});

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";

import Home from "../screens/Home";

const NavigationTab = createBottomTabNavigator();

export default function NavigationTabs() {
  return (
    <NavigationTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "black", borderWidth: 0 },
        headerShown: false,
        tabBarActiveTintColor: "white",
      }}
    >
      <NavigationTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/home.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <NavigationTab.Screen
        name="Discover"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/union.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <NavigationTab.Screen
        name="Activity"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/time.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <NavigationTab.Screen
        name="Bookmarks"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/bookmark.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <NavigationTab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/profile.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    </NavigationTab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  bottomTabIconFocused: {
    tintColor: "white",
  },
  newVideoButton: {
    width: 50,
    height: 25,
  },
});

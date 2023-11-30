import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Playlist({ playlist }) {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Image source={require("../assets/playlist.png")} style={[styles.icon]} />
        <Text style={styles.playlistText}>{playlist}</Text>
      </View>
      <View>
        <Image
          source={require("../assets/chevron.png")}
          style={[styles.iconSmall]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: "black",
  },
  description: {
    flexDirection: "row"
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: 20,
    marginRight: 10,
  },
  iconSmall: {
    width: 8,
    height: 8,
    marginTop: 5,
    marginRight: 20,
    alignItems: "flex-end",
  },
  playlistText: {
    color: "white",
  },
});

import React from "react";
import { View, StyleSheet, Text } from "react-native";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default HomeScreen;

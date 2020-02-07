import React from "react";
import { SafeAreaView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import MainNavigator from "./src/navigation/MainNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator />
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1
  }
});

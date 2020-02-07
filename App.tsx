import React from "react";
import { SafeAreaView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import MainNavigator from "./src/navigation/MainNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1
  }
});

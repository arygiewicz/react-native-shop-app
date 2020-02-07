import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../shared/styles";

interface Props {}

class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Products</Text>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryColor
  }
});

export default Home;

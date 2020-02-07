import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../shared/styles";

interface Props {}

class Cart extends Component<Props> {
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
  },
  text: {
    flex: 1,
    padding: "15@s",
    color: colors.primaryFontColor,
    fontSize: "16@s"
  }
});

export default Cart;

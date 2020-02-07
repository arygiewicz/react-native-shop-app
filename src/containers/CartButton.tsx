import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ScaledSheet, scale } from "react-native-size-matters";
import { colors } from "../shared/styles";

interface Props {}

class CartButton extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Cart")}
        >
          <View style={styles.cartProductNumberWrapper}>
            <Text style={styles.cartProductNumber}>0</Text>
          </View>
          <Icon
            name="shopping-cart"
            size={scale(30)}
            color={colors.primaryFontColor}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: "15@s"
  },
  cartProductNumberWrapper: {
    position: "absolute",
    height: "20@s",
    width: "20@s",
    bottom: "0@s",
    right: "15@s",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15@s",
    backgroundColor: "rgba(255,255,255,0.7)",
    zIndex: 100
  },
  cartProductNumber: {
    color: colors.primaryColor
  }
});

export default CartButton;

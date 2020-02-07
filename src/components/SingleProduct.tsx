import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { colors } from "../shared/styles";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {}

class SingleProduct extends Component<Props> {
  render() {
    const { product } = this.props;
    if (!product.id) {
      product.id = this.props.id;
    }
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => alert("pressed")}
      >
        <Text style={styles.product}>
          {product.count ? product.count : null} {product.name}{" "}
          {product.price.toFixed(2)} $
        </Text>
        <Icon name="plus-circle" size={scale(24)} color={"green"} />
      </TouchableOpacity>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  product: {
    color: colors.primaryFontColor,
    fontSize: "16@s",
    paddingVertical: "5@s",
    paddingRight: "5@s"
  }
});

export default SingleProduct;

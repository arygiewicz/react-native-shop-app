import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import SingleProduct from "./SingleProduct";
import { colors } from "../shared/styles";
import { products } from "../constants/Data";

interface Props {}

class ProductsList extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Products:</Text>
        {products.map((item, index) => {
          return (
            <SingleProduct key={index} product={products[index]} id={index} />
          );
        })}
      </View>
    );
  }
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: "15@s"
  },
  header: {
    color: colors.primaryFontColor,
    fontSize: "16@s",
    paddingBottom: "5@s",
    fontWeight: "bold"
  }
});

export default ProductsList;

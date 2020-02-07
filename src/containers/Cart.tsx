import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../shared/styles";
import ProductsList from "../components/ProductsList";

interface Props {}

class Cart extends Component<Props> {
  render() {
    const { products } = this.props;
    return (
      <View style={styles.container}>
        {products.length === 0 ? (
          <Text style={styles.text}>Your cart is empty.</Text>
        ) : (
          <>
            <ProductsList products={products} />
            <Text style={styles.text}>TOTAL: 0 $</Text>
          </>
        )}
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

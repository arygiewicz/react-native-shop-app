import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import SingleProduct from "./SingleProduct";
import { colors } from "../shared/styles";
import { Product } from "../shared/interfaces";

interface Props {
  products: Product[];
  enableDelete: boolean;
}

class ProductsList extends Component<Props> {
  render() {
    const { products, enableDelete } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Products:</Text>
        {products.map((item: Product, index: number) => {
          return (
            <SingleProduct
              key={index}
              product={products[index]}
              id={index}
              enableDelete={enableDelete}
            />
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

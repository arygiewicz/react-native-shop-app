import React, { Component } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../shared/styles";
import ProductsList from "../components/ProductsList";

interface Props {}

class Home extends Component<Props> {
  render() {
    const { products } = this.props;
    return (
      <View style={styles.container}>
        <ProductsList products={products} />
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

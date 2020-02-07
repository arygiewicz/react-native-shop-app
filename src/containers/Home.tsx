import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { ScaledSheet } from "react-native-size-matters";
import ProductsList from "../components/ProductsList";
import { colors } from "../shared/styles";
import { Product } from "../shared/interfaces";

interface Props {
  products: Product[];
}

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

const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(Home);

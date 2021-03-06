import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";
import { colors } from "../shared/styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import { Product } from "../shared/interfaces";

interface Props {
  product: Product;
  id: number;
  addProductToCart: ({ name: string, price: number }) => void;
  removeProductFromCart: ({ name: string, price: number }) => void;
  enableDelete?: boolean;
}

class SingleProduct extends Component<Props> {
  render() {
    const { product } = this.props;
    if (!product.id) {
      product.id = this.props.id;
    }
    const { enableDelete } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          enableDelete
            ? this.props.removeProductFromCart(product)
            : this.props.addProductToCart(product)
        }>
        <Text style={styles.product}>
          {product.count ? product.count : null} {product.name}{" "}
          {product.price.toFixed(2)} $
        </Text>
        {enableDelete ? (
          <Icon name='times-circle' size={scale(24)} color={"red"} />
        ) : (
          <Icon name='plus-circle' size={scale(24)} color={"green"} />
        )}
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    addProductToCart: product => {
      dispatch(addToCart(product));
    },
    removeProductFromCart: product => {
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(null, mapDispatchToProps)(SingleProduct);

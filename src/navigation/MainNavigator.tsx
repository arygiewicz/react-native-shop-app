import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/Home";
import Cart from "../containers/Cart";
import CartButton from "../containers/CartButton";
import { colors } from "../shared/styles";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryColor
          },
          headerTintColor: colors.primaryFontColor,
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={nav => ({
            title: "Store App",
            headerRight: () => <CartButton navigation={nav.navigation} />
          })}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

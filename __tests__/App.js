import "react-native";
import React from "react";
import App from "../App.tsx";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

jest.mock("react-native-vector-icons/FontAwesome", () => "Icon");

it("renders correctly", () => {
  renderer.create(<App />);
});

import React, { Component } from "react";
import { View, Text } from "react-native";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";

export default class App extends Component {
  render() {
    return (
      <View>
        <SignupForm />
        <SigninForm />
      </View>
    );
  }
}

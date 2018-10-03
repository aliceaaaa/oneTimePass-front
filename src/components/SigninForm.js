import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";

const rootURL = "https://us-central1-one-time-pass-5056d.cloudfunctions.net";

export default class SigninForm extends Component {
  state = { phone: "", code: null };

  handleSubmit = async () => {
    const { phone, code } = this.state;
    try {
      await axios.post(`${rootURL}/verifyOneTimePassword`, {
        phone,
        code
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel>Enter Your Code</FormLabel>
        <FormInput
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
        />
        <Button title="Sign In" onPress={this.handleSubmit} />
      </View>
    );
  }
}

import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";
import axios from "axios";

const rootURL = "https://us-central1-one-time-pass-5056d.cloudfunctions.net";

export default class SignupForm extends Component {
  state = { phone: "" };

  handleSubmit = async () => {
    try {
      await axios.post(`${rootURL}/createUser`, { phone: this.state.phone });
      await axios.post(`${rootURL}/requestOneTimePassword`, {
        phone: this.state.phone
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
        <Button title="Sign Up" onPress={this.handleSubmit} />
      </View>
    );
  }
}

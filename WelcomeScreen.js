import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

// App Logo
const logo = require("../Auth-App/images/Triton Logo border.png");

export default class WelcomeScreen extends React.Component {
  handleRoute = async (destination) => {
    await this.props.navigation.navigate(destination);
  };
  render() {
    return (
      <View style={styles.container}>
        {/* App Logo */}
        <Image source={logo} style={{ width: 110.46, height: 117 }} />
        <TouchableOpacity
          onPress={() => this.handleRounte("SignIn")}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.handleRoute("ForgetPassword")}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Forget password ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#505050", // #b13366
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    padding: 20,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
    color: "#000000",
  },
});

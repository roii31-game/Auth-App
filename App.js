import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./SignInScreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

//Screen Importing
import WelcomeScreen from "./WelcomeScreen";

// Amplify imports and config
import Amplify from "@aws-amplify/core";
import awsmobile from "./src/aws-exports";
Amplify.configure(awsmobile);

//Auth Stack

// const AuthStackNavigator = createNativeStackNavigator({
//   Welcome: {
//     screen: WelcomeScreen,
//     navigationOptions: () => ({
//       title: "Welcome to this App", // for the header screen
//       headerBackTitle: "Back",
//     }),
//   },
//   SignIn: {
//     screen: SignInScreen,
//     navigationOptions: () => ({
//       title: "Sign In MotherFucker",
//     }),
//   },
// });

// const appNav = createSwitchNavigator({
//   Auth: AuthStackNavigator,
// });

// const AppContainer = createAppContainer(appNav);

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppContainer /> */}
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

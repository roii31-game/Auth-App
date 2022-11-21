import React from "react";

import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Alert,
  Modal,
  FlatList,
  Animated,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Container, Item, Input } from "native-base";

//AWS Amplify modular import
import data from "../countriesData";

//Load the app logo
const logo = require("./images/Triton Logo border.png");

// Default render of country flag
const defaultFlag = data.filter((obj) => obj.name === "United States")[0].flag;

// Default render of country code
const defaultCode = data.filter((obj) => obj.name === "United States")[0]
  .dial_code;

export default class SignUpScreen extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    fadeIn: new Animated.Value(0),
    fadeOut: new Animated.Value(1),
    isHidden: false,
    flag: defaultFlag,
    modalVisible: false,
    authCode: "",
  };
}

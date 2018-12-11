// @flow

import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import colors from "../theme";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeTitle: {
    color: colors.primary,
    fontSize: 30
  },
  formContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  field: {
    flex: 1,
    height: 44,
    fontSize: 12,
    backgroundColor: colors.field,
    textAlign: "center"
  },
  button: {
    flex: 1,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginHorizontal: 10
  },
  buttonText: {
    color: colors.button,
    fontSize: 12
  },
  spacer: {
    flex: 1
  }
});

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeTitle}>Bienvenue</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Entrez votre prénom"
            underlineColorAndroid="transparent"
            placeholderTextColor={colors.placeholder}
            style={styles.field}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.buttonText}>Bonjour !</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer} />
      </View>
    );
  }
}

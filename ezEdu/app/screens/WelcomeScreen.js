import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(navigation) {
  return (
    <ImageBackground
      source={require("../assets/book.jpeg")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>Education Matters</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)}/>
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  buttonsContainer: {
    padding: 70,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 170,
    alignItems: "center",
  },
  tagline: {
    fontSize: 35,
    fontWeight: "500",
    color: "#F2E7D5",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

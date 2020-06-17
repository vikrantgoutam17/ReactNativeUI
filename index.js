import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Login_button = ({ text }) => {
  return (
    <View style={styles.background}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3FFC03",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
export default Login_button;

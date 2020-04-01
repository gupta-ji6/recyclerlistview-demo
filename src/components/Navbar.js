import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Navbar = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 65,
    backgroundColor: "#E4587D",
    alignItems: "center",
    flexDirection: "row",
    elevation: 4
  },
  headerText: {
    color: "white",
    fontSize: 18,
    marginLeft: 16,
    paddingBottom: 3
  },
  backIcon: {
    height: 23,
    width: 23,
    marginLeft: 16
  }
});

export default Navbar;

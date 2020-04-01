import React, { Component } from "react";
import { Text, View, Image } from "react-native";
export default class DescriptionWidget extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>{this.props.data.productName}</Text>
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.lightText}>by {this.props.data.brand}</Text>
        </View>
        <View>
          <Text>{this.props.data.off}</Text>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginLeft: 16,
    marginRight: 16
  },
  middleContainer: {
    alignItems: "stretch",
    flexDirection: "column"
  },
  lightText: {
    fontSize: 12,
    color: "#878787"
  }
};

import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import DescriptionWidget from "./DescriptionWidget";

export default class ProductCard extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: this.props.data.values.imgUrl }}
          />
          <DescriptionWidget data={this.props.data.values} />
          <Text style={styles.finalPriceText}>
            {this.props.data.values.cost}
          </Text>
        </View>
        <View style={styles.line}></View>
      </View>
    );
  }
}
const styles = {
  outerContainer: {
    flex: 1,
    alignItems: "stretch"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    padding: 16
  },
  finalPriceText: {
    marginLeft: 16,
    color: "blue",
    fontSize: 16
  },
  image: {
    height: 100,
    width: 100,
    marginRight: 16
  },
  line: {
    height: 1.5,
    backgroundColor: "#d3d3d3"
  }
};

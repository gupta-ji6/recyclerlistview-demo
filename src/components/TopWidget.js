import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";

let { height, width } = Dimensions.get("window");

export default class TopWidget extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://source.unsplash.com/random/400x400?baby"
          }}
          style={styles.img}
        />
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1
  },
  img: {
    width: width,
    height: height / 2
  }
};

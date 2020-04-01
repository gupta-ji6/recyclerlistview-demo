import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import {
  RecyclerListView,
  LayoutProvider,
  DataProvider
} from "recyclerlistview";

import Navbar from "./src/components/Navbar";
import ProductData from "./src/components/ProductData";
import TopWidget from "./src/components/TopWidget";
import ParentingCard from "./src/components/ParentingCard";
import ProductCard from "./src/components/ProductCard";

class App extends Component {
  constructor(props) {
    super(props);
    let { width } = Dimensions.get("window");

    this.state = {
      //Since component should always render once data has changed, make data provider part of the state
      //Create the data provider and provide method which takes in two rows of data and return if those two are different or not.
      //THIS IS VERY IMPORTANT, FORGET PERFORMANCE IF THIS IS MESSED UP
      dataProvider: new DataProvider((r1, r2) => {
        return r1 !== r2;
      }).cloneWithRows(ProductData)
    };

    //Create the layout provider
    //First method: Given an index return the type of item e.g ListItemType1, ListItemType2 in case you have variety of items in your list/grid
    //Second: Given a type and object set the exact height and width for that type on given object, if you're using non deterministic rendering provide close estimates
    //If you need data based check you can access your data provider here
    //You'll need data in most cases, we don't provide it by default to enable things like data virtualization in the future
    //NOTE: For complex lists LayoutProvider will also be complex it would then make sense to move it to a different file

    this._layoutProvider = new LayoutProvider(
      i => {
        return this.state.dataProvider.getDataForIndex(i).type;
      },
      (type, dim) => {
        switch (type) {
          case "PARENTING_ITEM":
            dim.width = width;
            dim.height = 83;
            break;
          case "BABY_ITEM":
            dim.width = width;
            dim.height = 150;
            break;
          case "HEADER":
            dim.width = width;
            dim.height = 300;
            break;
          default:
            dim.width = width;
            dim.height = 0;
        }
      }
    );

    this._renderRow = this._renderRow.bind(this);
  }

  //Given type and data return the view component
  _renderRow(type, data) {
    switch (type) {
      case "PARENTING_ITEM":
        return <ParentingCard />;
      case "BABY_ITEM":
        return <ProductCard data={data} />;
      case "HEADER":
        return <TopWidget />;
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar title="FirstCry" />
        <RecyclerListView
          rowRenderer={this._renderRow}
          dataProvider={this.state.dataProvider}
          layoutProvider={this._layoutProvider}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;

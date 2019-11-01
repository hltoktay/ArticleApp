import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image
} from "react-native";

class ArticleItem extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Read Article</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 50
  }
});

export default ArticleItem;

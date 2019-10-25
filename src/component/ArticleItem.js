import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class ArticleItem extends Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Go back" onPress={() => goBack("Article")} />
        <Text>Read Article</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  }
});

export default ArticleItem;

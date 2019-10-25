import React, { Component } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

import { getArticles } from "../service/news";
import ArticleItem from "../component/ArticleItem";

import * as firebase from "firebase";

export class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    };
  }

  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data
        });
      },
      error => {
        Alert.alert("Error", "Something went wrong!");
      }
    );
  }

  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text
          style={{
            marginTop: 20,

            textAlign: "center"
          }}
        >
          Please Wait ...
        </Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <ArticleItem data={item} />;
        }}
      />
    );

    return (
      <View style={styles.container}>
        <Header />
        <Content>{view}</Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    paddingLeft: 10
  },
  articleContainer: {
    padding: 10,
    borderBottomColor: "rgba(255,255,255, 0.7)",
    borderBottomWidth: 2
  },
  heading: {
    fontSize: 22,
    color: "#000",
    marginBottom: 10
  },
  content: {
    marginTop: 10,
    fontSize: 16
  }
});

export default Articles;

//

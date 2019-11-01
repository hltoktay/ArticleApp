import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import {
  Header,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Title
} from "native-base";

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
    return fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a3bab7110f94b7896aa20498a609277"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          data: responseJson.articles
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { navigation } = this.props;
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let articles = this.state.data.map((val, key) => {
        return (
          <View key={key} style={styles.item}>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: val.urlToImage }} />
                </Left>
                <Body>
                  <Text>{val.author}</Text>
                  <Text note numberOfLines={4}>
                    {val.title}
                  </Text>
                </Body>
                <Right>
                  <Button
                    onPress={() =>
                      navigation.navigate("Item", {
                        ...val
                      })
                    }
                    transparent
                  >
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </View>
        );
      });
      return (
        <ScrollView bounces={false} style={styles.container}>
          <Header transparent style={styles.header}>
            <Body>
              <Title>Articles</Title>
            </Body>
          </Header>
          {articles}
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fdf4e4"
  },
  item: {
    flex: 1
  },
  header: {}
});

export default Articles;

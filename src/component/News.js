import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { getNews } from "../actions/news_actions";

class News extends Component {
  componentDidMount() {
    this.props.dispatch(getNews());
  }

  renderArticle = news =>
    news.articles
      ? news.articles.map((item, i) => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Item", {
                ...item
              })
            }
            key={i}
          >
            <View style={styles.cardContainer}>
              <View>
                <Image
                  style={{ height: 150, justifyContent: "space-around" }}
                  source={{ uri: `${item.image}` }}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.contentCard}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.team}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      : null;

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderArticle(this.props.News)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red"
  },
  cardContainer: {
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    News: state.News
  };
}

export default connect(mapStateToProps)(News);

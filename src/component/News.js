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
          <TouchableOpacity key={i}>
            <Text>{item.content}</Text>
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
    flex: 1,
    backgroundColor: "#e3e3e3"
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    News: state.News
  };
}

export default connect(mapStateToProps)(News);

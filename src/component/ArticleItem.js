import React, { Component } from "react";
import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Button
} from "native-base";

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : "https://vice-images.vice.com/images/content-images/2016/07/04/what-your-facebook-profile-photo-says-about-you-body-image-1467635168.jpg?output-quality=75"
            }}
          />
        </Left>
        <Body>
          <Text>{this.data.title}</Text>
          <Text note numberOfLines={1}>
            {this.data.description}
          </Text>
        </Body>
        <Right>
          <Button transparent>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default ArticleItem;

import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";

const DEVIZES_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
  }
  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView horizontal pagingEnabled>
          {images.map((image, i) => (
            <Image
              key={image}
              source={{ uri: image }}
              style={styles.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: DEVIZES_WIDTH
  }
});

export { BackgroundCarousel };

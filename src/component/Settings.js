import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import * as firebase from "firebase";
import styles from "../styles/Setting.style";
import { Divider } from "react-native-elements";

class Settings extends Component {
  state = {
    notifications: true,
    newsletter: false
  };

  render() {
    const { profile, navigation } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Icon
            style={styles.backIcon}
            name="backburger"
            size={20}
            color="#000"
          />
        </TouchableOpacity>

        <View style={styles.headerTop}>
          <Text style={styles.titleText}>Settings</Text>

          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri:
                "https://vice-images.vice.com/images/content-images/2016/07/04/what-your-facebook-profile-photo-says-about-you-body-image-1467635168.jpg?output-quality=75"
            }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.input}>
            <View style={styles.inputRow}>
              <View>
                <Text style={{ color: "grey" }}>Username</Text>
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                  Sebastian
                </Text>
              </View>
              <Text style={styles.editText}>Edit</Text>
            </View>
            <View style={styles.inputRow}>
              <View>
                <Text style={{ color: "grey" }}>Location</Text>
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                  London/UK
                </Text>
              </View>
              <Text style={styles.editText}>Edit</Text>
            </View>
            <View style={styles.inputRow}>
              <View>
                <Text style={{ color: "grey" }}>E-mail</Text>
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                  sebo@hotmail.com
                </Text>
              </View>
              <Text style={styles.editText}>Edit</Text>
            </View>
          </View>
          <Divider style={{ marginTop: 10 }} />

          <View style={styles.togglesContainer}>
            <View style={styles.toggles}>
              <Text style={{ color: "grey" }}>Notifications</Text>
              <Switch
                value={this.state.notifications}
                onValueChange={value => this.setState({ notifications: value })}
              />
            </View>

            <View style={styles.toggles}>
              <Text style={{ color: "grey" }}>Newsletter</Text>
              <Switch
                value={this.state.newsletter}
                onValueChange={value => this.setState({ newsletter: value })}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={
              () => firebase.auth().signOut()
              // .then(() => {
              //   this.props.navigation.navigate("Home");
              // })
            }
          >
            <Text style={{ color: "#fff" }}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Settings;

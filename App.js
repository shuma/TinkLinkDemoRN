/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, Platform} from 'react-native';

import {WebView} from 'react-native-webview';

const TinkLinkURL =
  'https://link.tink.com/1.0/authorize/?client_id=<CLIENT_ID>&redirect_uri=http://localhost:3000/callback&market=GB&scope=accounts:read';

export const setTestId = id => {
  return Platform.OS === 'android' ? {accessibilityLabel: id} : {testID: id};
};

export default class App extends Component {
  render() {
    return (
      <View>
        <Text {...setTestId('welcomeText')} style={styles.welcome}>
          Tink Link Demo
        </Text>
        <ScrollView>
          <WebView
            {...setTestId('iframe')}
            source={{uri: TinkLinkURL}}
            style={styles.iframe}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  iframe: {
    height: 700,
  },
});

import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import { styles } from '../style/LoadingScreen';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/Loading_icon.gif')} style={styles.loadingIcon} ></Image>
        <Text style={styles.loadingText}>Loading</Text>
      </View>
    );
  }
}
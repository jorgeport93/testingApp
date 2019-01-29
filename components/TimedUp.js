import React, {Component} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from '../style/TimedUp';

export default class TimedUp extends Component {
  render() {
    return (
      <View style = {styles.alertContainer}>
        <View styles={styles.alertDialg}>
          <Text style = {styles.warning}>Timed Up</Text>
          {
            this.props.quizNo < 9 &&
              <TouchableOpacity onPress={this.props.gotonextProblem} style={styles.quizButton}><Text style={styles.quizButtonText}>Go to Next Problem</Text></TouchableOpacity>
          }
          {
            this.props.quizNo == 9 &&
              <TouchableOpacity onPress={this.props.submitResult} style={styles.quizButton}><Text style={styles.quizButtonText}>Submit Result</Text></TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}
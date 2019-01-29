import React, {Component} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from '../style/TestFinished';

export default class TestFinished extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.quizResultContainer}>
          <Text style = {styles.quizText}>You had </Text>
          <Text style = {[styles.quizText, styles.boldText]}>{this.props.quiz_mark}</Text>
          <Text style = {styles.quizText}> marks </Text>
        </View>
        <View style = {styles.quizResultContainer}>
          <Text style = {styles.quizText}>You have taken </Text>
          { this.props.quiz_total_time >= 60 && 
            <View style ={styles.timeContainer}>
              <Text style = {[styles.quizText, styles.boldText]}>{Math.floor(this.props.quiz_total_time / 60)}</Text>
              <Text style = {styles.quizText}>m </Text>
            </View>
          }
          <Text style = {[styles.quizText, styles.boldText]}>{this.props.quiz_total_time % 60}</Text>
          <Text style = {styles.quizText}>s </Text>
        </View>
        <TouchableOpacity onPress={this.props.startquizagain} style = {styles.quizButton}>
          <Text style={styles.quizButtonText}>Start Test Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
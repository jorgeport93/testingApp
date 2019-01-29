import React, {Component} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from '../style/ProblemContent';

export default class ProblemContent extends Component {
  render() {
    const Entities = require('html-entities').Html5Entities;
    const entities = new Entities();
    return (
      <View style={styles.container}>
        <Text style={styles.quizNo}>Problem No {this.props.quizNo + 1}.</Text>
        <View style={styles.quizTimeContainer}>
          <Text style={styles.quizTime}>{ Math.floor((120 - this.props.quiz_timeinsecond) / 60) < 10 ? '0' + Math.floor((120 - this.props.quiz_timeinsecond) / 60) : Math.floor((120 - this.props.quiz_timeinsecond) / 60) }</Text><Text> : </Text><Text style={styles.quizTime}>{(120 - this.props.quiz_timeinsecond) % 60 < 10 ? '0' + (120 - this.props.quiz_timeinsecond) % 60 : (120 - this.props.quiz_timeinsecond) % 60}</Text>
        </View>
        <Text style={styles.quizText}>
        {
          entities.decode(this.props.data[this.props.quizNo].question)
        }
        </Text>
        <View style={styles.quizAnswers}>
        {
          this.props.answers.map((value, index) => 
            <TouchableOpacity style={[styles.answerItem, this.props.selectedAnswer === index && styles.answerSelected]} key={index} onPress={() => this.props.selectAnswerItem(index)}>
              <Text style={styles.answerDesc}>{entities.decode(value)}</Text>
            </TouchableOpacity>
          )
        }
        </View>
        <View style={styles.quizbuttonContainer}>
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
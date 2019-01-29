import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import TestContent from './TestContent';
import { styles } from '../style/TestApp';

export class TestApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      testStarted : false
    }
  }

  startQuiz = () => {
    this.setState({testStarted: true});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.testStarted && 
          <TestContent />
        }
        {!this.state.testStarted && 
          <View>
            <Text style = {styles.title}>Simple Testing Application</Text>
            <Text style = {styles.desc}>Here are 10 questions to answer. {"\n"} You need to answer a question within 2 mins</Text>
            <TouchableOpacity onPress={this.startQuiz} style = {styles.quizButton}><Text style={styles.quizButtonText}>Start Quiz</Text></TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}
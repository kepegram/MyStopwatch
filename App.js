import {Text, TouchableOpacity, View} from 'react-native';
import styles from './src/styles';
import timer, {initialTime} from './src/timer';
import {Component} from 'react';

export default class App extends Component {
  state = initialTime;

  OnStart = () => {
    this.setState(state => timer());
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.currentValue}</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.lapButton}
            onPress={() => console.log('you have clicked lap')}>
            <Text style={styles.buttonText}>Lap</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => console.log('you have clicked start')}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

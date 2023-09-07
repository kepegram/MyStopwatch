import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 90,
    marginTop: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
  },
  startButton: {
    alignItems: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 200,
  },
  lapButton: {
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 100,
  },
});

export default styles;

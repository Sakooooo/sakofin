import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        style={styles.startup}
      />
      <Text style={styles.funnytext}>I would have been much more stable in Dart!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#444444',
      alignItems: 'center',
      justifyContent: 'center',
  },
  header: {
      backgroundColor: 'black',
      opacity: 0.1,
      padding: 40,
  },
    startup: {
        width: 100,
        height: 100,
    },
    funnytext: {
        paddingTop: 30,
        fontSize: 17,
        color: 'white',
    },
});

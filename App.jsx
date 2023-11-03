import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.blackBackgroundText}>im a funny text box</Text>
        <Text style={styles.blackBackgroundText}>why is react more confusing?????</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
      backgroundColor: 'pink',
      padding: 20,
  },
  boldText: {
      fontWeight: 'bold',
  },
    body: {
        backgroundColor: 'black',
        padding: 20,
    },
    blackBackgroundText: {
        color: 'white',
    },
});

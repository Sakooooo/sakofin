import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/icon.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#444444',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
      backgroundColor: 'black',
      opacity: 0.1,
      padding: 40,
  },
    logo: {
        width: 50,
        height: 50,
    },
});

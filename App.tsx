import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { useState } from 'react';
import { myColors } from './src/styles/colors';
import Button from './src/components/Button';
import Keyboard from './src/components/Keyboard';

const App = () => {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === "light" ? styles.container : [styles.container, { backgroundColor: "#000" }]}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={ theme === 'light' ? '#f4f3f4' : "#f5dd4b"} 
          style={styles.switch}
          value={theme === "light"}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switch: {
    marginVertical: 25,
  }
});

export default App;

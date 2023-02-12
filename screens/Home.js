import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage</Text>
        <Button title="Sign Up" onPress={() => navigation.navigate('Dashboard')} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.welcomeText}>Welcome to Manage App!</Text>
        <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright © 2023 | Manage</Text>
        <Text style={styles.footerText}>Powered by EduLinkage</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'black',
  },
  header: {
    height: 60,
    backgroundColor: 'purple',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  footer: {
    height: 60,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Home;
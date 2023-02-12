import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.promptText}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue to Dashboard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Copyright (c) 2023 | Manage</Text>
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
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  promptText: {
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    color: 'white',
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: 'white',
  },
});

export default Login;
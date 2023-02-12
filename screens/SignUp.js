import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import axios from 'axios';

const SignUp = ({ navigation }) => {
  const [role, setRole] = useState('parent');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('');
  const [childName, setChildName] = useState('');
  const [password, setPassword] = useState('');
  const [referenceCode, setReferenceCode] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [gradeError, setGradeError] = useState('');

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 const handleSignUp = async () => {
  setEmailError('');
  setPasswordError('');
  setGradeError('');

  if (!emailRegex.test(email)) {
    setEmailError('Invalid email');
    return;
  }
  if (password.length < 6) {
    setPasswordError('Password must be at least 6 characters long');
    return;
  }
  if (grade < 1 || grade > 12) {
    setGradeError('Grade must be between 1 and 12');
    return;
  }
    try {
      const response = await axios.post('https://server.edulinkage.co.za:8000/api/users/register', {
        name,
        email,
        grade,
        childName,
        password,
        referenceCode,
        role
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      if (response.data.success) {
        navigation.navigate('Dashboard');
      }      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage</Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.promptText}>Get a free account on MANAGE</Text>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          placeholderTextColor="#A9A9A9"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={(text) => setEmail(text)}
          errorMessage={emailError}
      />
      <Text style={styles.errorText}>{emailError}</Text>
        <TextInput
          style={styles.input}
          placeholder="Grade (1-12)"
          placeholderTextColor="#A9A9A9"
          keyboardType="number-pad"
          value={grade}
          onChangeText={(text) => setGrade(text)}
          errorMessage={gradeError}
        />
        <Text style={styles.errorText}>{gradeError}</Text>
        <TextInput
          style={styles.input}
          placeholder="Child's name"
          placeholderTextColor="#A9A9A9"
          value={childName}
          onChangeText={(text) => setChildName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          errorMessage={passwordError}
        />
        <Text style={styles.errorText}>{passwordError}</Text>
        <TextInput
          style={styles.input}
          placeholder="Reference code"
          placeholderTextColor="#A9A9A9"
          value={referenceCode}
          onChangeText={(text) => setReferenceCode(text)}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
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
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 10,
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
    picker: {
      width: '80%',
      height: 50,
      color: 'white',
      borderColor: 'purple',
      borderWidth: 1,
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
    footer: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerText: {
      color: 'white',
    },
  });
  
  export default SignUp;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Complains = ({ navigation }) => {
  const [complains, setComplains] = useState([]);
  const [complain, setComplain] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://server.edulinkage.co.za:8000/api/complain');
      setComplains(result.data);
    };

    fetchData();
  }, []);

  const handlePostComplain = async () => {
    const result = await axios.post('https://server.edulinkage.co.za:8000/api/complain', {
      complain,
    });
    setComplains([...complains, result.data]);
    setComplain('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={complains}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.complain}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={complain}
        onChangeText={(text) => setComplain(text)}
        placeholder="Enter your complaint"
      />
      <TouchableOpacity style={styles.button} onPress={handlePostComplain}>
        <Text style={styles.buttonText}>Post Complain</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  itemText: {
    fontSize: 16,
  },
  input: {
    height: 50,
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
  },
  button: {
    height: 50,
    margin: 20,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Complains;
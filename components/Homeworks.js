import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Homework = ({ navigation }) => {
  const [homeworkData, setHomeworkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://server.edulinkage.co.za:8000/api/homework');
        const jsonData = await response.json();
        setHomeworkData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={homeworkData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeworkDetails', {
                homeworkId: item._id,
              })
            }
          >
            <View style={styles.homeworkContainer}>
              <Text style={styles.homeworkTitle}>{item.title}</Text>
              <Text style={styles.homeworkDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  homeworkContainer: {
    marginBottom: 20,
  },
  homeworkTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  homeworkDescription: {
    fontSize: 16,
  },
});

export default Homework;
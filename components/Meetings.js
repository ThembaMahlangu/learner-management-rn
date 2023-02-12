import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch('https://server.edulinkage.co.za:8000/api/meeting', {
        headers: {
          'Authorization': `Bearer ${userId}`
        }
      });
      const data = await response.json();
      setMeetings(data);
    };

    fetchMeetings();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={meetings}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  itemContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemDate: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Meetings;
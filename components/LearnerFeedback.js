import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const LearnerFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const getFeedback = async () => {
      try {
        const response = await axios.get('https://server.edulinkage.co.za:8000/api/feedback', {
          headers: {
            'Authorization': `Bearer ${BearerToken}`
          }
        });
        setFeedbacks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFeedback();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={feedbacks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.feedbackContainer}>
            <Text style={styles.subject}>Subject: {item.subject}</Text>
            <Text style={styles.message}>Message: {item.message}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  feedbackContainer: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
  subject: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
  },
});

export default LearnerFeedback;
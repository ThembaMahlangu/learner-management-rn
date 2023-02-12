import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.announcementText}>
        This is the home screen of the dashboard.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  announcementText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default DashHome;
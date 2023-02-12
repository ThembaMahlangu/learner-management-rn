import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DashHome from '../components/DashHome';
import Assignments from '../components/Assignments';
import Homeworks from '../components/Homeworks';
import Meetings from '../components/Meetings';
import Complains from '../components/Complains';

const Dashboard = ({ navigation }) => {
  const [selectedScreen, setSelectedScreen] = useState('DashHome');

  const renderSelectedScreen = () => {
    switch (selectedScreen) {
      case 'DashHome':
        return <DashHome />;
      case 'Assignments':
        return <Assignments />;
      case 'Homeworks':
        return <Homeworks />;
      case 'Meetings':
        return <Meetings />;
      case 'Complains':
        return <Complains />;
      default:
        return <DashHome />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="Show Menu"
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      {renderSelectedScreen()}
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
});

export default Dashboard;
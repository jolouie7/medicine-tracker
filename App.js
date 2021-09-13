import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MedTaken from './components/medTaken';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <Text style={styles.sectionTitle}>Medicine Taken</Text>

        <View style={styles.items}>
          {/* This is where medicine taken will go */}
          <MedTaken content={'take 2'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {},
});

import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const MedTaken = (props) => {
  return (
    <View>
      <View style={styles.date}>
        <Text>1/2/2021</Text>
      </View>
      <Text>{props.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default MedTaken

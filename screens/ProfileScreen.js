import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default ProfileScreen;

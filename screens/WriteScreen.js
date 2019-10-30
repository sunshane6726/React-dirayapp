import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

// 카메라 센서 인식같은 것을 덜 확인하기위해서
export default function WriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.textstyle}>Main Screens</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle:{
      fontSize:40,
  }
});

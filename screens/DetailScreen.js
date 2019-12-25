import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// 카메라 센서 인식같은 것을 덜 확인하기위해서
export default class DetailScreen extends  React.Component {
  static navigationOptions = {

    tabBarIcons:({tintColor}) =>( // 함수를 바로 리턴해준다는 의미이다.
      <MaterialCommunityIcons name = "calender-multiselect" size = "30" style = {{color:tintColor}}/>
    )
  }
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <Text style = {styles.textstyle}>Detail Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a8ff78',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle:{
      fontSize:40,
  }
});

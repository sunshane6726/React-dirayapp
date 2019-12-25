import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import WriteHeader from '../components/WriteHeader';

// 카메라 센서 인식같은 것을 덜 확인하기위해서
export default class WriteScreen extends React.Component {
  static navigationOptions = {

    tabBarIcons:({mycolor}) =>( // 함수를 바로 리턴해준다는 의미이다.
      <MaterialCommunityIcons name = "lead-pencil" size = { 30 } style = {{color:mycolor}}/>
    ),
    tarBarOnPress : ({navigation}) => {
      navigation.navigate('Write')
    }
  }
  render(){

    return (
      <SafeAreaView style={styles.container}>
        <WriteHeader/>
        <Text style = {styles.textstyle}>Write Screen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaafc8',
    paddingTop:50,
  },
  textstyle:{
      fontSize:40,
  }
});

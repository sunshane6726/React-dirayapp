import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen'; //중괄호 부분을 삭제한다
import WriteScreen from './screens/WriteScreen';

const BaseNavi = createBottomTabNavigator({ // //alignItems: 'center',
            //justifyContent: 'center',  다들어가 있습니다.
  MainScreen : {
    screen : MainScreen
  },
  DetailScreen : {
    screen : DetailScreen
  },
  WriteScreen : {
    screen : WriteScreen
  },
})
// 앱으로 묶음으로 해놓는다.
const MyNavi = createApp = createAppContainer(BaseNavi)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your 확인하자</Text>
      <MyNavi/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

// App - Navigator - Screen
// App(Navigaotr) - Screen
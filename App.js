import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar,} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import  MainScreen  from './screens/MainScreen';
import  WriteScreen  from './screens/WriteScreen';
import  DetailScreen from './screens/DetailScreen'; //중괄호 부분을 삭제한다
import {MaterialCommunityIcons} from '@expo/vector-icons';


const BaseNavi = createBottomTabNavigator({ // //alignItems: 'center',
            //justifyContent: 'center',  다들어가 있습니다.
  MainScreen : {
    screen : MainScreen
  },
  DetailScreen : {
    screen : DetailScreen,
    
    
 },
  WriteScreen : {
    screen : WriteScreen
    
  },
  
  
})

const BaseNavi2 = createStackNavigator(
  {
    Write : WriteScreen,
    Tab : BaseNavi,
  },
  {
    initialRouteName:'Tab',
    // mode : 'modal'
    hearderMode : 'none',
  }
)


// 앱으로 묶음으로 해놓는다.
const MyNavi = createAppContainer(BaseNavi2)

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
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
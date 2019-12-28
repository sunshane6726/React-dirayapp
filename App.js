import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,} from 'react-navigation';
import { createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import  MainScreen  from './screens/MainScreen';
import  WriteScreen  from './screens/WriteScreen';
import  DetailScreen from './screens/DetailScreen'; //중괄호 부분을 삭제한다
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons'


//BottomTabNavigator를 생성합니다. (이름처럼 아래부분에 탭을 통해 이동하는 Navigator입니다)
const BaseNavi = createBottomTabNavigator({ // //alignItems: 'center',
            //justifyContent: 'center',  다들어가 있습니다.

  //MainScreen이라는 이름의 tab item을 만듭니다          
  MainScreen : {
    screen : MainScreen,
    
    
  },
  DetailScreen : {
    screen : DetailScreen,
    
    
 },
  WriteScreen : {
    screen : WriteScreen,
    
  },
  
  
})

//App.js에서 Navigation을 사용하려면 createAppContainer을 이용해
//최상위 Navigation을 처리 해줘야 합니다. 지금은 BaseNavi하나이므로 BaseNavi를 처리해줍시다
//const MyNavi = createAppContainer(BaseNavi);


const BaseNavi2 = createStackNavigator(
  {
    Write : WriteScreen,
    Tab : BaseNavi,
    Detail : DetailScreen,
  },
  {
    initialRouteName:'Tab',  // 처음 보여줄 Page라고 생각하시면 되겠습니다 지금은 Tab이니까 TabNavi의 첫번째 Main이 떠요
    // mode : 'modal' ios
    hearderMode : 'none', //headermode를설정 안하시고 동작시켜보면 알겠지만 stack된 screen위에
                          //header가 생긴 것을 볼수 있어요. 그 header에 뒤로가기가 있는데
                          //우리는 따로 header를 만들어 줄 예정이므로 'none'설정을 해줍시다
  }
)

// 앱으로 묶음으로 해놓는다.
const MyNavi = createAppContainer(BaseNavi2)

export default function App() {
  return (
    <View style={styles.container}>
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
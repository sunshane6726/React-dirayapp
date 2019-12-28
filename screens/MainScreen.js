import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'



// 카메라 센서 인식같은 것을 덜 확인하기위해서
export default class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon:({tintColor}) =>( // 함수를 바로 리턴해준다는 의미이다.
      <MaterialCommunityIcons name='calendar-multiselect' size={30} style={{ color: tintColor }} />
    )
  }
  state = {
    selectedDate : '',
    Posts : [{
      title : '12월 18일에 쓴 글',
      content : '본문',
      date : '2019-12-18',
    },
    {
      title : '8월 29일에 쓴 글',
      content : '본문',
      date : '2019-12-18',

    }
  ]
  }

  render(){
  return (
    console.log(this.state.selectedDate),
    <SafeAreaView style={styles.container}>
      <Calendar
        onDayPress = {(day)=>{this.setState(this.selectedDate = day)}}
        current = {new Date}/>
        <ScrollView>
          <FlatList
          data = {this.state.Posts.filter(data => {return data.date == this.state.selectedDate.dataString})}
          renderItem = {({item, index})=>{
            return (
              <TouchableOpacity onPress = {()=> {this.props.navigation.navigate('Detail',{post:item})}}> 
               <View style={styles.itemContainer}>
                  <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                  
                  <Text style={styles.content} numberOfLines={1}>{item.content}</Text>
                </View>
              </TouchableOpacity>

            )
          }}
            keyExtractor = {(item, index) => {return `${index}`}}/>
        </ScrollView>
      
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 100,
  },
  textstyle:{
      fontSize:40,
  }
});

import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import WriteHeader from '../components/WriteHeader';
import {Ionicons} from '@expo/vector-icons'
import uuid from 'uuid/v1'; //uuid v1을 이용하기위해서 가져왔습니다


const { width, height } = Dimensions.get('window');

// 카메라 센서 인식같은 것을 덜 확인하기위해서
export default class WriteScreen extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({tintColor}) => {
      return <Ionicons name='ios-person' size={25} color={tintColor}/>   
    },
    tarBarOnPress : ({navigation}) => {
      navigation.navigate('Write')
    }
  }


    
  render(){

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <WriteHeader  saveProps={this._saveText}/> {/*Header부분에 save Icon이 있으므로 props로 넘겨줍시다*/}
            <TextInput
              value = {this.state.inputtitle} {/*Input창에 뜨는 값은 onChangeText에 의해 변한 state값을 띄워줍니다*/}
              onChangeText={this._showTitle}
              placeholder="제목을 입력하세요"
              style={styles.title}
              returnKeyType="done"/> 
                                    
            <TextInput
              value={this.state.inputcontent}
              onChangeText={this._showContent}            
              placeholder="내용을 입력하세요"
              multiline={true} //여러줄에 걸친 입력이 가능합니다
              style={styles.content}
              returnKeyType="done" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    paddingTop:30,
  },

  contentContainer: {
    width: width - 60,
    },

  title: {
    marginVertical: 30, //margin을 위 아래로 주는 속성입니다
    fontSize: 30,
    paddingBottom: 12,
    borderBottomWidth: 2,
  },

  content:{
    fontSize: 20,
  },
    
});

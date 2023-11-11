import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,  
  View, 
  FlatList, Button, Text, 
  ScrollView, TouchableOpacity, TouchableWithoutFeedback, Modal, Platform, ActivityIndicator, Pressable
} from 'react-native';
import { useState } from 'react';
import { useSelector, dispatch , useDispatch} from 'react-redux';
import { authenticateAuthTokens, logoutAuthTokens } from '../../store/redux/authTokens'

import BehaviorStatItem from '../../components/BehaviorStatItem';


export default function BehaviorStatScreen() {

  const authToken = useSelector( (state) => state.authTokens.data[0]); 

  const userList = useSelector( (state) => state.users.users);
  const currUser = userList.filter(user => user.username == authToken.email);
  const behaviorList = currUser[0].behaviorLogs;



  return (
    <View style={styles.container}>
      <Text>To do: Behavior Stat Screen</Text>

      <FlatList data={behaviorList} renderItem = {itemData => {
          return <BehaviorStatItem 
          behaviorID = {itemData.behaviorID}
          description = {itemData.description}
          startDate = {itemData.startDate}
          endDate =  {itemData.endDate}
          frequency =  {itemData.frequency}
          goalCount = {itemData.goalCount}
          goalMeasurment =  {itemData.goalMeasurment}
          name = {itemData.name}
          type =  {itemData.type}
          icon =  {itemData.icon}

          //onDeleteItem={deleteBehaviorHandler}
          //onPress={pressHandler}
          />
z
        }}
        //keyExtractor={(item,index) => {return item.behaviorID}} 
        alwaysBounceVertical={true}
        /> 

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: '#F0F0F0',
    flexDirection: "row",
},
button: {
    width: 100,
    marginHorizontal: 8
}
});

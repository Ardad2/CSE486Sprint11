import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector, dispatch, useDispatch } from 'react-redux';
import { authenticateAuthTokens, logoutAuthTokens } from '../store/redux/authTokens';




function BehaviorStatItem(props) {

    const navigation = useNavigation();

    const authToken = useSelector( (state) => state.authTokens.data[0]); 


    const userList = useSelector( (state) => state.users.users);
    const currUser = userList.filter(user => user.username == authToken.email);
    const behaviorList = currUser[0].behaviorLogs;
  

    function pressHandler() {
      props.onPress(props.behaviorName, props.id, props.behaviorID, props.date
      )
    }

    function calculateAverage() 
    {
      var totalMeasurment = 0;
      var completedMeasurment = 0;

      for (var i = 0; i < behaviorList.length; i++)
      {
        if (behaviorList[i].behaviorID == props.behaviorID)
        {
          totalMeasurment+=behaviorList[i].goalCount;
          completedMeasurment+=behaviorList[i].count;
        }
      }

      return (completedMeasurment)/(totalMeasurment);
    }
    

    return (
        <View style={styles.behaviorItem}>
        <Pressable 
        android_ripple ={{color:'#210644'}}
        onPress={pressHandler}
        style={({pressed}) => pressed && styles.pressedItem}
        > 
        <View> 
        <Text style={styles.behaviorText}>{props.name} {calculateAverage()} </Text>
        </View>
        </Pressable>
        </View>
    );
}

export default BehaviorStatItem;

const styles = StyleSheet.create({
  behaviorItem: {
    margin: 8,
    backgroundColor: 'white',
    color: 'black',
    height: 60,
  },
  pressedItem: {
    opacity: 0.5
  },
  behaivorText: {
    color: 'black',
    padding: 20,
  }
});
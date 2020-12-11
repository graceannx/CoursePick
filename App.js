import React, { useContext, useEffect, useState } from 'react';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import CourseEditScreen from './screens/CourseEditScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import UserContext from './UserContext';
import { Button } from 'react-native';
import SigninScreen from './screens/SigninScreen';
import {firebase} from './firebase';

const SignInButton = ({ navigation, user }) => (
  user && user.uid
  ? <Button title="Logout" color="#448aff"
      onPress={() => firebase.auth().signOut()}
    />
  : <Button title="SignIn" color="#448aff"
      onPress={() => navigation.navigate('SigninScreen')}
    />
);


const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({ role: 'admin'});
  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);
  return (
    <UserContext.Provider value={user}>
    <NavigationContainer> 
      <Stack.Navigator>
      
      <Stack.Screen name="ScheduleScreen"
          component={ScheduleScreen}
          options={({navigation}) => ({ 
            title: "Schedule",
            headerRight: () => (
              <SignInButton navigation={navigation} user={user} />
            ),
          })
        }
        />
        
        <Stack.Screen name="CourseDetailScreen"
          component={CourseDetailScreen}
          options={{ title: 'Course Detail'}} 
        />
        
        <Stack.Screen name="CourseEditScreen"
          component={CourseEditScreen}
          options={{ title: 'Course Edit'}} 
        />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
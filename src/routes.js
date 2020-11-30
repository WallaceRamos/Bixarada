import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';



const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

import SignIn from './pages/SignIn';

import SignUpNavigationHeader from './pages/SignUpNavigationHeader';


import SignUpNGO from './pages/SignUpNGO';
import ProfileNGO from './pages/ProfileNGO';
import NewIncident from './pages/NewIncident';
import IncidentsNGO from './pages/IncidentsNGO';
import IncidentNGODetail from './pages/IncidentNGODetail';
import IncidentUpdate from './pages/IncidentUpdate';



import SignUpUser from './pages/SignUpUser';
import UpdateUser from './pages/UpdateUser';
import ProfileUser from './pages/ProfileUser';
import IncidentsList from './pages/IncidentsList';
import IncidentDetail from './pages/IncidentDetail';
import PayDonate from './pages/PayDonate';




export default function Routes() {

  const TabsUserScreen = () => (
    <Tab.Navigator

      initialRouteName="Home"
      activeColor="#fff"
      inactiveColor="#CAC4C4"
      shifting={true}
      barStyle={{ backgroundColor: '#0096c9', paddingBottom: 12 }}
    >
      <Tab.Screen name="Home" component={IncidentsList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={19} />
          ),
        }}
      />
      <Tab.Screen name="Perfil" component={ProfileUser}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={19} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  const TabsNOGScreen = () => (
    <Tab.Navigator

      initialRouteName="Home"
      activeColor="#1c558e"
      inactiveColor="#CAC4C4"
      shifting={true}
      barStyle={{ backgroundColor: '#FFF', paddingBottom: 12 }}
    >
      <Tab.Screen name="Home" component={IncidentsNGO}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={19} />
          ),
        }}
      />
      <Tab.Screen name="NewIncident" component={NewIncident}
        options={{
          tabBarLabel: 'New Incident',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="plus" color={color} size={19} />
          ),
        }}
      />
      <Tab.Screen name="Perfil" component={ProfileNGO}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={19} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>

        <HomeStack.Screen name="SignIn" component={SignIn} />
        <HomeStack.Screen name="SignUpNavigationHeader" component={SignUpNavigationHeader} />
        <HomeStack.Screen name="SignUpUser" component={SignUpUser} />
        <HomeStack.Screen name="SignUpNGO" component={SignUpNGO} />
     
        <HomeStack.Screen name="UpdateUser" component={UpdateUser} />
        <HomeStack.Screen name="TabsUser" component={TabsUserScreen} />
        <HomeStack.Screen name="IncidentDetail" component={IncidentDetail} />
        <HomeStack.Screen name="PayDonate" component={PayDonate} />

        <HomeStack.Screen name="TabsNOG" component={TabsNOGScreen} />
        <HomeStack.Screen name="IncidentNGODetail" component={IncidentNGODetail} />
        <HomeStack.Screen name="IncidentUpdate" component={IncidentUpdate} />
        


      </HomeStack.Navigator>
    </NavigationContainer>
  );

}
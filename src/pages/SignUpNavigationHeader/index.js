import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, AsyncStorage, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import TopNavigator from '../../components/topNavigtor';

import styles from './styles';

import logo from '../../assets/logoTexto.png';

export default function SignUpNavigationHeader() {
  
  
  return (
    <>
       
    <View style={styles.container} >

<View style={styles.header}>
      
     <Image source={logo} style={styles.headerLogo} />


  

</View>

        <TopNavigator />
     </View>
    </>
  );
}

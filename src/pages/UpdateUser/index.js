import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mask } from 'remask';

import Toast from 'react-native-toast-message';

import api from '../../services/api';
import UserImagePicker from '../../components/UserImagepicker';
import logo from '../../assets/logoTexto.png';


import styles from './styles';


export default function UpdateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [adress, setAdress] = useState('');

  
  const navigation = useNavigation();


  async function handleSubmit() {

    const uri = await AsyncStorage.getItem('uri');
    if (uri === null || uri === undefined) {
      Toast.show({
        type: 'error',
        text1: 'Hello',
        text2: 'Select an image 👋'
      });
      return false
    }
    if (uri != null || uri != undefined) {
    const ID = await AsyncStorage.getItem('UserId');

    const formData = new FormData();
    formData.append('userImage', {
      type: 'image/jpeg',
      uri: uri,
      name: 'user.jpg',
    });
    formData.append('name', name);
    formData.append('email', email);
    formData.append('birthdate', birthdate);
    formData.append('adress', adress);

    try {
      const response = await api.put(`user/${ID}`, formData, {
        headers: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      });
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success',
        text2: `Update successfully`,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 100,
        onShow: () => {},
        onHide: () => {}
      });

      navigation.navigate('TabsUser');
    } catch (err) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: `${err.response.data.error}`,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 100,
        onShow: () => {},
        onHide: () => {}
      });
    }
  }


  }
  return (
    <>

    <View style={styles.header}>

      <Image source={logo} style={styles.headerLogo} />

    </View>
  <ScrollView >
        <View style={styles.form} >


{(<UserImagePicker />)}
<TextInput
  style={styles.input}
  placeholder="Enter your name"
  placeholderTextColor="#999"
  autoCapitalize="none"
  value={name}
  onChangeText={setName}
/>
<TextInput
  style={styles.input}
  placeholder="Enter your email"
  placeholderTextColor="#999"
  keyboardType="email-address"
  autoCapitalize="none"
  autoCorrect={false}
  value={email}
  onChangeText={setEmail}
/>
<TextInput
  style={styles.input}
  placeholder="Enter your date of birth"
  placeholderTextColor="#999"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={10}
  keyboardType="numeric"
  value={mask(birthdate, ['99/99/9999'])}
  onChangeText={setBirthdate}
/>
<TextInput
  style={styles.input}
  placeholder="Enter your address"
  placeholderTextColor="#999"
  autoCapitalize="words"
  autoCorrect={true}
  value={adress}
  onChangeText={setAdress}
/>
<View style={styles.ConteinerButton}>
  <TouchableOpacity onPress={handleSubmit} style={styles.buttonSignIn}>
    <Text style={styles.buttonTextSignIn}>SIGN UP</Text>
  </TouchableOpacity>

</View>
</View>
</ScrollView>

    </>
  );
}

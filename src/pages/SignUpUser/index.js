import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { mask } from 'remask';

import api from '../../services/api';
import UserImagePicker from '../../components/UserImagepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './styles';


export default function SignUpUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [adress, setAdress] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(2);
  

  const navigation = useNavigation();


  async function handleSubmitLogin() {
    navigation.navigate('SignIn')
  }

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
    formData.append('password', password);
    formData.append('status', status);
    try {
      const response = await api.post('users', formData, {
        headers: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      });
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success',
        text2: `successful registration`,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 100,
        onShow: () => {},
        onHide: () => {}
      });

      navigation.navigate('SignIn');
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
  placeholder="Enter date of birth"
  placeholderTextColor="#999"
  keyboardType="numeric"
  autoCapitalize="none"
  maxLength={10}
  autoCorrect={false}
  value={mask(birthdate, ['99/99/9999'])}
  onChangeText={setBirthdate}
/>
<TextInput
  style={styles.input}
  placeholder="Enter Address"
  placeholderTextColor="#999"
  autoCapitalize="words"
  autoCorrect={true}
  value={adress}
  onChangeText={setAdress}
/>
<TextInput
  style={styles.input}
  placeholder="Enter your password"
  placeholderTextColor="#999"
  secureTextEntry
  autoCapitalize="none"
  autoCorrect={false}
  value={password}
  onChangeText={setPassword}
/>
<View style={styles.ConteinerButton}>
  <TouchableOpacity onPress={handleSubmit} style={styles.buttonSignIn}>
    <Text style={styles.buttonTextSignIn}>SIGN UP</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={handleSubmitLogin} style={styles.buttonSignUp}>
    <Text style={styles.TexSignUp}>Already have an account? <Text style={styles.TextSignUpBold}>Log in here</Text></Text>
  </TouchableOpacity>
</View>
</View>
</ScrollView>
     
    </>
  );
}

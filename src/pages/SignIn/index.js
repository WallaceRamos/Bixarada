import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import api from '../../services/api';
import styles from './styles';

import logo from '../../assets/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleSubmitRegister() {
    navigation.navigate('SignUpNavigationHeader')
  }

  async function handleSubmit() {
    const Dice = {
      email,
      password
    }
    try {
      const response = await api.post('auth', Dice);
      const { status, email, _id, userImage_url } = response.data;
      AsyncStorage.setItem('UserEmail', email);
      AsyncStorage.setItem('UserId', _id);

      if (status === 1) {
        navigation.navigate('TabsNOG',)

      } else if (status === 2) {
        AsyncStorage.setItem('UserImage', userImage_url);
        navigation.navigate('TabsUser',)

      }
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
        onShow: () => { },
        onHide: () => { }
      });
    }


  }
  return (
    <View behavior="padding" style={styles.container}>
      <ScrollView>

        <View style={styles.logoContainer} >
          <Image source={logo} style={styles.logoContainerImg} />
        </View>
        <View style={styles.form} >

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
          {/* <Text style={styles.label}>Qual é a sua senha?</Text> */}
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
              <Text style={styles.buttonTextSignIn}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmitRegister} style={styles.buttonSignUp}>
              <Text style={styles.TexSignUp}>Not have an account yet?
              <Text style={styles.TextSignUpBold}> Sign up here</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

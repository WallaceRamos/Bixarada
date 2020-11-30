import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, View, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';


import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logoTexto.png';

function PerfilUser({ isFocused }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [adress, setAdress] = useState('');

  const navigation = useNavigation();

  async function loadPerfil() {

    const ID = await AsyncStorage.getItem('UserId');

    const response = await api.get(`/ngo/${ID}`);// chamada da api
    setName(response.data.name);
    setEmail(response.data.email);
    setWhatsapp(response.data.whatsapp);
    setAdress(response.data.adress);

    return;

  }

  useEffect(() => {

    if (isFocused) {
      loadPerfil();
    }

  }, [isFocused]);

  async function handleUpdate() {
    const DADOS = {
      name,
      email,
      whatsapp,
      adress,
    }
    try {
      const ID = await AsyncStorage.getItem('UserId');
      const response = await api.put(`ngos/${ID}`, DADOS);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success',
        text2: `Update successfully`,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 100,
        onShow: () => { },
        onHide: () => { }
      });

      loadPerfil();
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

  async function handleSignout() {
    AsyncStorage.clear();
    navigation.navigate('SignIn');

  }
  return (
    <>

      <View style={styles.container} >

        <View style={styles.header}>

          <Image source={logo} style={styles.headerLogo} />

        </View>

        <ScrollView >

          <View style={styles.form} >


         
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
              placeholder="Enter your Whatsapp"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              value={whatsapp}
              onChangeText={setWhatsapp}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your Address"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              value={adress}
              onChangeText={setAdress}
            />
            <View style={styles.ConteinerSignout}>
              <TouchableOpacity onPress={handleUpdate} style={styles.update}>
                <Text style={styles.updateText}>UPDATE</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSignout} style={styles.signout}>
                <Text style={styles.signoutText}>GET OUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </View>

    </>
  );
}

export default withNavigationFocus(PerfilUser);
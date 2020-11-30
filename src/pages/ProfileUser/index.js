import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Image, View, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';
import AsyncStorage from '@react-native-async-storage/async-storage';


import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logoTexto.png';

function PerfilUser({ isFocused }) {
  const [userImage, setUserImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ3U4t_8ZYQaCeEMDx1PgP3PVkr2BdbpxkFA&usqp=CAU');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [adress, setAdress] = useState('');
  const navigation = useNavigation();

  async function loadPerfil() {
  
    const ID = await AsyncStorage.getItem('UserId');

    const response = await api.get(`/user/${ID}`);// chamada da api
    setUserImage(response.data.userImage_url);
    setName(response.data.name);
    setEmail(response.data.email);
    setBirthdate(response.data.birthdate);
    setAdress(response.data.adress);

    return;

  }

  useEffect(() => {
  
    if(isFocused){
      loadPerfil();
    }
    
  }, [isFocused]);
  
async function handleUpdate(){
  navigation.navigate('UpdateUser');
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


            <View style={styles.ConteinerImage}>

              <Image source={{ uri: userImage }} style={styles.ImagePerfil} />
            </View>
            <View style={styles.ConteinerText}>
              <Text style={styles.TextPerfil}>{name}</Text>
            </View>
            <View style={styles.ConteinerText}>
              <Text style={styles.TextPerfil}>{email}</Text>
            </View>
            <View style={styles.ConteinerText}>
              <Text style={styles.TextPerfil}>{birthdate}</Text>
            </View>
           
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
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mask } from 'remask';
import Toast from 'react-native-toast-message';

import api from '../../services/api';
import IncidentImagepicker from '../../components/IncidentImagepicker';
import logo from '../../assets/logoTexto.png';


import styles from './styles';


export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  

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
    formData.append('incidentImage', {
      type: 'image/jpeg',
      uri: uri,
      name: 'user.jpg',
    });
    formData.append('title', title);
    formData.append('description', description);
    formData.append('goal', goal);
    formData.append('total', 0);
    formData.append('start', mask(start, ['99/99/9999']));
    formData.append('end', mask(end, ['99/99/9999']));

    try {
      await api.post(`incidents/${ID}`, formData, {
        headers: {
          headers: { 'Content-Type': 'multipart/form-data' },
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

      navigation.navigate('Home');
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


{(<IncidentImagepicker />)}
<TextInput
  style={styles.input}
  placeholder="Enter your name"
  placeholderTextColor="#999"
  autoCorrect={true}
  autoCapitalize="words"
  value={title}
  onChangeText={setTitle}
/>


{/* <Text style={styles.label}>Qual é o seu e-mail?</Text> */}
<TextInput
  style={styles.input}
  placeholder="Enter a description"
  placeholderTextColor="#999"
  autoCorrect={true}
  value={description}
  onChangeText={setDescription}
/>
<TextInput
  style={styles.input}
  placeholder="Enter a goal"
  placeholderTextColor="#999"
  keyboardType="number-pad"
  autoCapitalize="none"
  autoCorrect={false}
  value={goal}
  onChangeText={setGoal}
/>

<TextInput
  style={styles.input}
  placeholder="Enter the start date"
  placeholderTextColor="#999"
  keyboardType="number-pad"
  autoCapitalize="none"
  autoCorrect={false}
  value={mask(start, ['99/99/9999'])}
  onChangeText={setStart}
/>

<TextInput
  style={styles.input}
  placeholder="Enter the end date"
  placeholderTextColor="#999"
  autoCapitalize="none"
  autoCorrect={false}
  value={mask(end, ['99/99/9999'])}
  onChangeText={setEnd}
/>

<View style={styles.ConteinerButton}>
  <TouchableOpacity onPress={handleSubmit} style={styles.buttonSignIn}>
    <Text style={styles.buttonTextSignIn}>REGISTER INCIDENT</Text>
  </TouchableOpacity>

</View>
</View>
</ScrollView>

    </>
  );
}

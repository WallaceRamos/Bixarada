import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mask } from 'remask';

import Toast from 'react-native-toast-message';

import api from '../../services/api';
import IncidentImagePicker from '../../components/IncidentImagepicker';
import logo from '../../assets/logoTexto.png';


import styles from './styles';


export default function IncidentUpdate() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.given;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');


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
    formData.append('incidentImage', {
      type: 'image/jpeg',
      uri: uri,
      name: 'user.jpg',
    });
    formData.append('title', title);
    formData.append('description', description);
    formData.append('goal', goal);
    formData.append('start', mask(start, ['99/99/9999']));
    formData.append('end', mask(end, ['99/99/9999']));

    try {
      const response = await api.put(`incidents/${incident._id}`, formData, {
        headers: {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      });
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Success',
        text2: `update performed successfully`,
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 100,
        onShow: () => {},
        onHide: () => {}
      });

      navigation.navigate('TabsNOG');
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


{(<IncidentImagePicker />)}
<TextInput
  style={styles.input}
  placeholder="Enter a Title"
  placeholderTextColor="#999"
  autoCapitalize="none"
  value={title}
  onChangeText={setTitle}
/>

<TextInput
  style={styles.input}
  placeholder="Enter a Description"
  placeholderTextColor="#999"
  autoCapitalize="none"
  autoCorrect={false}
  value={description}
  onChangeText={setDescription}
/>
<TextInput
  style={styles.input}
  placeholder="Enter a Goal"
  placeholderTextColor="#999"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={10}
  keyboardType="numeric"
  value={goal}
  onChangeText={setGoal}
/>
<TextInput
  style={styles.input}
  placeholder="Enter a Start date"
  placeholderTextColor="#999"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={10}
  keyboardType="numeric"
  value={mask(start, ['99/99/9999'])}
  onChangeText={setStart}
/>
<TextInput
  style={styles.input}
  placeholder="Enter a End Date"
  placeholderTextColor="#999"
  autoCapitalize="none"
  autoCorrect={false}
  maxLength={10}
  keyboardType="numeric"
  value={mask(end, ['99/99/9999'])}
  onChangeText={setEnd}
/>


<View style={styles.ConteinerButton}>
  <TouchableOpacity onPress={handleSubmit} style={styles.buttonSignIn}>
    <Text style={styles.buttonTextSignIn}>UPDATE THE INCIDENT</Text>
  </TouchableOpacity>

</View>
</View>
</ScrollView>

    </>
  );
}

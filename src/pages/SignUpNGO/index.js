import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mask } from 'remask';
import Toast from 'react-native-toast-message';


import api from '../../services/api';
import styles from './styles';


export default function SignUpNGO() {
  const [status, setStatus] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [adress, setAdress] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();


  async function handleSubmitLogin() {
    navigation.navigate('SignIn')
  }

  async function handleSubmit() {
   
  const DADOS = {
    
    name,
    email,
    whatsapp,
    cnpj,
    adress,
    status,
    password
    
  }
    try {
      const response = await api.post('ngos', DADOS);
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
  return (
    <>
    <ScrollView>
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
  autoCapitalize="words"
  autoCorrect={false}
  value={email}
  onChangeText={setEmail}
/>

<TextInput
  style={styles.input}
  placeholder="Enter your Whatsapp"
  placeholderTextColor="#999"
  autoCapitalize="none"
  maxLength={14}
  keyboardType="numeric"
  autoCorrect={false}
  value={mask(whatsapp, ['(99)99999-9999'])}
  onChangeText={setWhatsapp}
/>
<TextInput
  style={styles.input}
  placeholder="Enter your CNPJ"
  placeholderTextColor="#999"
  autoCapitalize="none"
  maxLength={18}
  keyboardType="numeric"
  autoCorrect={false}
  value={mask(cnpj, ['99.999.999/9999-99'])}
  onChangeText={setCnpj}
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
    <Text style={styles.TexSignUp}>Already have an account? 
    <Text style={styles.TextSignUpBold}>Log in here</Text>
    </Text>
  </TouchableOpacity>
</View>
</View>
</ScrollView>
    </>
  );
}

import React, { useState } from 'react';
import { Alert, TouchableOpacity, TextInput, Text, ActivityIndicator, View, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { Feather } from '@expo/vector-icons';


import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import api from  '../../services/api';
import logo from '../../assets/logoTexto.png';
import styles from './styles';

export default function PayDonate() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.given;
  const [idPagamento, setIdPagamento] = useState(incident._id)
  const [emailPagamento, setEmailPagamento] = useState('')
  const [descricaoPagamento, setDescricaoPagamento] = useState('pagamentoDoação')
  const [vlrPagamento, setVlrPagamento] = useState('')
  const [valueDonate, setValueDonate] = useState('')
  const [showCheckout, setShowCheckout] = useState(false)
  
  function navigateBack() {
    navigation.goBack()
  }
async function handleDonate(){
  const ID = await AsyncStorage.getItem('UserId');
  const response = await api.post(`${ID}/casos/${incident._id}/donate`, {
    value: vlrPagamento,
    status: true
  });
  setValueDonate(response.data.value)
}

async function handleDonatePending(){
  const ID = await AsyncStorage.getItem('UserId');
  const response = await api.post(`${ID}/casos/${incident._id}/donate`, {
    value: vlrPagamento,
    status: false
  });
  setValueDonate(response.data.value)
}


async function handleShowCheckout(){
  
  if (emailPagamento === '' || emailPagamento === undefined){
    Toast.show({
      type: 'error',
      text1: 'Hello',
      text2: 'Type your payment email'
    });
    setShowCheckout(false)
    return false
  };
    if (vlrPagamento === '' || vlrPagamento === undefined){
      Toast.show({
        type: 'error',
        text2: 'Write a donation amount'
      });
      setShowCheckout(false)
    };
    if (emailPagamento != '' && vlrPagamento != ''){
      setShowCheckout(true)
    }
}

  const stateChange = (state) => {
    switch (state.title) {
      case 'success':
        setShowCheckout(false)
        handleDonate();
        Alert.alert("Payment accept!", `We received your payment`)
       
        break;
      case 'pending':
        setShowCheckout(false)
        handleDonatePending();
        Alert.alert("Pending payment!", `Your payment is pending processing`)
       
        break;
      case 'failure':
        setShowCheckout(false)
        Alert.alert("Payment not approved!", 'Check the data and try again')
        
        break;
    }
  }
  if (!showCheckout) {
    return (

      <View style={styles.container}>
         <View style={styles.header}>
            
            <Image source={logo} style={styles.headerLogo} />
  
        </View>
        <TouchableOpacity onPress={navigateBack} style={styles.goBack}>
          <Feather name="arrow-left" size={38} color="#1c558e" />
        </TouchableOpacity>
        <Text style={styles.title}>make your donation</Text>
        
        <TextInput
          style={styles.inputText}
          value={emailPagamento}
          autoCapitalize="none"
          onChangeText={(text) => setEmailPagamento(text)}
          placeholder={'Enter your E-mail'}
          keyboardType={'email-address'}
        />
       
        <TextInput
          style={styles.inputText}
          value={vlrPagamento}
          onChangeText={(text) => setVlrPagamento(text)}
          placeholder={'Enter the donation amount'}
          keyboardType={'numeric'}
        />
        <TouchableOpacity
          style={styles.personalButton}
          onPress={() => handleShowCheckout()}>
          <Text  style={styles.personalButtonText}>Pay {Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(vlrPagamento)}</Text>
        </TouchableOpacity>

      </View>
    )
  } else {

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
           <View style={styles.header}>
            
            <Image source={logo} style={styles.headerLogo} />
           
        </View>
        <TouchableOpacity onPress={() => setShowCheckout(false)} style={styles.goBack}>
          <Feather name="arrow-left" size={38} color="#1c558e" />
        </TouchableOpacity>
        
        <WebView
          source={{ uri: `http://192.168.10.5:3333/checkout/${idPagamento}/${emailPagamento}/${descricaoPagamento}/${vlrPagamento}` }}
          onNavigationStateChange={state => stateChange(state)}
          startInLoadingState={true}
          renderLoading={() => <ActivityIndicator />}
        />

      </View>
    )

  }



}

import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native';
import * as MailCompose from 'expo-mail-composer';

import styles from './styles';
import api from '../../services/api';

import logo from '../../assets/logoTexto.png';

function IncidentNGODetail({ isFocused }) {

  const SCREEN_WIDTH = Dimensions.get('screen').width

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
 

  const [given, setGiven] = useState('');
  const [incidentId, setIncidentId] = useState(incident._id);
 

  async function loadDetalhe() {
    const response = await api.get(`incidents/${incidentId}`);
    setGiven(response.data);
   
  }
  useEffect(() => {
    if(isFocused){
      loadDetalhe();
    }
    
  }, [isFocused]);

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailCompose.composeAsync({
      subject: `Solicitação de Retirada de dinheiro do caso ID: ${incident._id}`,
      recipients: [`bixaradapets@gmail.com`],
      body: `Olá gostaria de solicitar o deposito do total arrecadado de doação em um valor de R$ ${incident.total},00`
    })
  }
  function navigateToUpdate(given) {
    navigation.navigate('IncidentUpdate', { given });
  }
  return (
    <>
      <View style={styles.header}>
            
            <Image source={logo} style={styles.headerLogo} />
           
        </View>
        <TouchableOpacity onPress={navigateBack} style={styles.goBack}>
          <Feather name="arrow-left" size={38} color="#1c558e" />
        </TouchableOpacity>
      <View style={styles.container}>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >

          <View data={given} key={post => String(post._id)}>
            <View style={styles.ConteinerDatalhe}>
              <Image
                source={{ uri: given.incidentImage_url }}
                style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH }}
              />

              <Text style={styles.TituloDetalhe}>{given.title}</Text>

              <Text style={styles.SubTituloDetailhe}>Description</Text>
              <Text style={{ padding: 10, fontSize: 16 }}>{given.description}</Text>

              <Text style={styles.SubTituloDetailhe}>Raised</Text>
              <Text style={{ padding: 10, fontSize: 16 }}>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(given.total)}</Text>

              <Text style={styles.SubTituloDetailhe}>Goal</Text>
              <Text style={{ padding: 10, fontSize: 16 }}>{Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(given.goal)}</Text>
            </View>

           
            <TouchableOpacity
              onPress={sendMail}
              style={styles.swap}>
              <Text style={styles.swapText}>Request to Receive Donations</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigateToUpdate(given)}
              style={styles.swap}>
              <Text style={styles.swapText}>Update Case</Text>
            </TouchableOpacity>


          </View>

        </ScrollView>
      </View>
    </>
  );
}
export default withNavigationFocus(IncidentNGODetail);
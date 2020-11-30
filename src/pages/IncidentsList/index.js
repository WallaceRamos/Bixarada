import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { withNavigationFocus } from '@react-navigation/compat';
import AsyncStorage from '@react-native-async-storage/async-storage';


import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logoTexto.png';

function IncidentsList({ isFocused }) {
  const navigation = useNavigation();
  const [incident, setIncident] = useState([]);

  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);


 
  async function loadIncidents() {

    setLoading(true);// metodo para atualizar a pagina
    const response = await api.get('/incidents');// chamada da api
    setIncident(response.data);
    setLoading(false);// espera
  }

  useEffect(() => {
    if(isFocused){
      loadIncidents();
    }
    
  }, [isFocused]);

  async function refresList() {
    setRefreshing(true);


    await loadIncidents()


    setRefreshing(false);
  }

  function navigateToDetail(incident) {
    navigation.navigate('IncidentDetail', { incident });
  }
  return (
    <>
    
    <View style={styles.container} >

      <View style={styles.header}>
            
          <Image source={logo} style={styles.headerLogo} />

      </View>


      <Text style={styles.title}>List of all cases of animals registered by NGOs. </Text>

      <FlatList
        data={incident}
        style={styles.deliveryList}
        keyExtractor={incident => String(incident._id)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadIncidents()}
        onEndReachedThreshold={0.2}
        onRefresh={refresList}
        refreshing={refreshing}
        renderItem={({ item: incident }) => (
          <View style={styles.containerList}>
            <View style={styles.containerService}>

              <TouchableOpacity onPress={() => navigateToDetail(incident)}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: incident.incidentImage_url }} style={styles.imageService} />
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.titleService}>{incident.title}</Text>
                  <Text style={styles.descriptionService}>Raised {Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.total)}</Text>
                  <Text style={styles.descriptionService}>Goal {Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(incident.goal)}</Text>

                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

    </View>
    </>
  );
}
export default withNavigationFocus(IncidentsList);
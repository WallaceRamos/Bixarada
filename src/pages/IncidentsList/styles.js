import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
     
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 60,

  },
 
  headerLogo:{
   width: 169,
   height: 38,
   

 },
  headerText: {
    fontSize: 15,
    color: '#1c558e',
  },
  headerTextBold: {
    color: '#1c558e',
    fontWeight: 'bold'
  },
  
  title: {
    paddingHorizontal: 24,
    fontSize: 16,
    marginBottom: 16,
    marginTop: 38,
    lineHeight: 24,
    color: '#737380' 
  },
 
 
  deliveryList: {
   marginTop: 32,
 },


 containerService: {
  backgroundColor: "#FFF",
  borderRadius: 3,
  width: (width - 45) / 2,
  marginBottom: 15,
  alignSelf: 'flex-start',
},
containerList: {
  padding: 10,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  
},


imageContainer: {
  padding: 15,
},

imageService: {
  width: '100%',
  height: 100,
  resizeMode: 'contain',
  borderRadius: 20,
},

infoContainer: {
  padding: 15,
  borderTopWidth: 1,
  borderColor: '#eee',
},

titleService: {
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#111',
},

descriptionService: {
  textAlign: 'center',
  color: '#333',
  fontSize: 11,
},
});
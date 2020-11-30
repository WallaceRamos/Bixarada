import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    
  },
  headerLogo: {
    width: 169,
    height: 38,
  },
 
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    marginBottom: 20,
    paddingTop: 50,
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#1c558e',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 58,
    width: 370,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 6,

  },
  ConteinerSignout: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  update: {
    marginBottom: 20,
    height: 58,
    backgroundColor: '#1c558e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 378,
    paddingHorizontal: 24,
  },
  updateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  signout: {
    marginBottom: 20,
    height: 58,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 378,
    paddingHorizontal: 24,
  },
  signoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

});
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
  ConteinerImage: {
    paddingTop: 20,
    padding: 15,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImagePerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#1c558e',
  },
  ConteinerText: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextPerfil: {
    borderWidth: 2,
    borderColor: '#1c558e',
    paddingHorizontal: 20,
    padding: 15,
    fontSize: 16,
    color: '#444',
    height: 58,
    width: 378,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
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
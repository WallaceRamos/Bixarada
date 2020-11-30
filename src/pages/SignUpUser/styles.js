import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
   form: {
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    marginBottom: 20
  },
  label: {
    fontWeight: 'bold',
    color: '#FF0000',
    marginTop: 20,
    marginBottom: 6,
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
  buttonSignIn: {
    height: 58,
    backgroundColor: '#1c558e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    width: 370,
  },
  buttonTextSignIn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSignUp: {
    marginTop: 10,
    width: 370,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
   
  },
  TexSignUp: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 16,
  },
  TextSignUpBold: {
    color: '#1c558e',
    fontSize: 16,
    fontWeight: 'bold'
  }

});
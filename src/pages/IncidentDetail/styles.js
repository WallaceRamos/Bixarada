import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,

  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 50,

  },

  headerLogo: {
    width: 169,
    height: 38,


  },
  goBack: {
    position: "absolute",
    top: 50,
    left: 15,
  },
  ConteinerDatalhe: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    marginBottom: 20,
    paddingBottom: 20,

  },
  TituloDetalhe: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  SubTituloDetailhe: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },


  swap: {
    height: 58,
    backgroundColor: '#1c558e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
    width: 370,
  },

  swapText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

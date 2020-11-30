import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#fff', 
    padding: 20,
    justifyContent: 'center',
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
 goBack: {
  position: "absolute",
  top: 50,
  left: 15,
},
  title: {
    margin: 50,
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
  },
  inputText: {
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
  personalButton: {
    height: 58,
    backgroundColor: '#1c558e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    width: 370,
  },
  personalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },


});
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Routes from './src/routes';
import Toast from 'react-native-toast-message'




export default function App() {
  return (<>
    <Routes />
    <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}



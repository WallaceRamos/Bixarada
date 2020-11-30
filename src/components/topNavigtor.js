import React, { useEffect, useState } from 'react';
import { withNavigation } from '@react-navigation/compat';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import SignUpUser from '../pages/SignUpUser';
import SignUpNGO from '../pages/SignUpNGO';



function topNavigator({  }) {
const Top = createMaterialTopTabNavigator();
  
  return (
<Top.Navigator swipeEnabled={false}>
  
      <Top.Screen name="User" component={SignUpUser} />
      <Top.Screen name="NGO" component={SignUpNGO} />
      
    </Top.Navigator>
   
  )

}
export default withNavigation(topNavigator);
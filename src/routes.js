import React from 'react';

import { createAppContainer, createSt, createStackNavigator, HeaderBackButton} from 'react-navigation';
import { Image } from 'react-native';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png';

export default createAppContainer(
    createStackNavigator({        
        Feed,
        New,
    },  {
        defaultNavigationOptions: {
            headerTintColor: '#000',    // COR BOTÃO DE VOLTAR
            headerTitle: < Image style={{ marginHorizontal: 125}} source={logo }/>,   // ADICIONANDO A LOGO DO APP
            HeaderBackTitle: null
        },
         mode: 'modal',
    })
);
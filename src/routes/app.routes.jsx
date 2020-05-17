import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import Home from '../pages/Home'

const AppStack = createStackNavigator()

export default function AppRoutes(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen options={{headerShown:false}} name='Home' component={Home}/>
        </AppStack.Navigator>
    )
}
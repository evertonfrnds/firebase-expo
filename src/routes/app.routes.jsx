import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import HomeRoutes from './home.app.routes'

const AppStack = createStackNavigator()

export default function AppRoutes(){

    return(
        <AppStack.Navigator>
            <AppStack.Screen options={{headerShown:false}} name='Home' component={HomeRoutes}/>
        </AppStack.Navigator>
    )
}
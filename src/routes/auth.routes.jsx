import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack= createStackNavigator();

export default function AuthRoutes(){

    return(
        <AuthStack.Navigator >
            <AuthStack.Screen options={{headerShown: false}} name='SignIn' component={SignIn}/>
            <AuthStack.Screen options={{headerShown: false}} name='SignUp' component={SignUp}/>
        </AuthStack.Navigator>
    )
}
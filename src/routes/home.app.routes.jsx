import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import Home from '../pages/Home'


const HomeTabs = createBottomTabNavigator();

const icons = {
    Home: {
      name: 'ios-home'
    },
    Add: {
        name: 'ios-add'
    },
    Settings: {
      name: 'ios-settings'
    },
  }

export default function HomeRoutes(){
    return(
        <HomeTabs.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({color, size})=>{
                    const {name} = icons[route.name]
                    return <Ionicons name={name} size={size} color={color}/>
                }
            })}
            tabBarOptions={{
                style:{
                    marginHorizontal: 25,
                    position: 'absolute',
                    borderTopStartRadius: 5,
                    borderTopEndRadius: 5
                },
                activeTintColor: '#845ec7'
            }}
        >
            <HomeTabs.Screen name='Home' component={Home}/>
            <HomeTabs.Screen name='Add' component={Home}/>
            <HomeTabs.Screen name='Settings' component={Home}/>
        </HomeTabs.Navigator>
    )
}

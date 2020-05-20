import React,{useEffect, useState} from 'react'
import { StatusBar, FlatList, View, TouchableWithoutFeedback } from 'react-native'
import {
    Container,
    Header,
    SearchBar,
    SearchIcon,
    SearchInput,
} from './styles'

import FlatItem from '../../components/FlatItem'

import {getUsers, newUser} from '../../services/api'
import {data} from '../../services/data'

export default function Home() {

    const [dados, setDados] = useState([])
    const [name, setName] = useState('')
    useEffect(()=>{
        getUsers(setDados)
    },[])

    function create(){
        newUser(name);
        getUsers(setDados);
    }

    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <Header>
                Inicio
            </Header>
            <SearchBar>
                <SearchInput placeholder='Pesquisa' onChangeText={setName} value={name}/>
                <TouchableWithoutFeedback onPress={()=>console.log('olá')
                }>
                    <SearchIcon name='ios-search' />
                </TouchableWithoutFeedback>
            </SearchBar>
            <View style={{flex: 1, marginTop: 10}}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <FlatItem data={item}/>
                    )}
                    keyExtractor={item => item.id}
                />
                </View>
        </Container>
    )
}

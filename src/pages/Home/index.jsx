import React from 'react'
import { StatusBar, FlatList, View, Dimensions } from 'react-native'
import {
    Container,
    Header,
    SearchBar,
    SearchIcon,
    SearchInput,
    List
} from './styles'

import FlatItem from '../../components/FlatItem'


const data = [
    {
        id: 1,
        name: 'Everton Fernandes',
        age: '21',
        email: 'evertonfrnds@gmail.com'
    },
    {
        id: 2,
        name: 'Bianca Azevedo',
        age: '18',
        email: 'beacanz@gmail.com'
    },
    {
        id: 3,
        name: 'Leticia Fernandes',
        age: '22',
        email: 'evertonfrnds@gmail.com'
    },
    {
        id: 4,
        name: 'Everton Fernandes',
        age: '21',
        email: 'evertonfrnds@gmail.com'
    },
    {
        id: 5,
        name: 'Leticia Fernandes',
        age: '22',
        email: 'evertonfrnds@gmail.com'
    },
    {
        id: 6,
        name: 'Everton Fernandes',
        age: '21',
        email: 'evertonfrnds@gmail.com'
    },
]

export default function Home() {

    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <Header>
                Inicio
            </Header>
            <SearchBar>
                <SearchInput placeholder='Pesquisa' />
                <SearchIcon name='ios-search' />
            </SearchBar>
            <View style={{flex: 1, marginTop: 10}}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <FlatItem/>
                    )}
                    keyExtractor={item => item.id}
                />
                </View>
        </Container>
    )
}

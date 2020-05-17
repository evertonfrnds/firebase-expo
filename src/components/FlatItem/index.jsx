import React from 'react'
import {
    Container, 
    Name,
    UserContainer,
    Label,
    Icon
} from './styles'

export default function FlatItem({data}) {

    return (
        <Container>
            <UserContainer>
                <Name>
                    Everton Fernandes
                </Name>
                <Label>
                    Idade: 21
                </Label>
                <Label>
                    evertonfrnds@gmail.com
                </Label>
            </UserContainer>
            <Icon/>
        </Container>
    )
}
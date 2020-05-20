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
                    {data.name}
                </Name>
                <Label>
                    Idade: {data.age}
                </Label>
                <Label>
                    {data.email}
                </Label>
            </UserContainer>
            <Icon/>
        </Container>
    )
}
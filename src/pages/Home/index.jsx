import React from 'react'
import { StatusBar } from 'react-native'
import {
    Container,
    FormLoginContainer,
    FormTitle,
    FormInput,
    Row,
    Icon,
    FormLabel,
    FormSubmit,
    SubmitLabel
} from './styles'

export default function Home() {

    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <FormLoginContainer>
                <FormTitle>
                    Sign In
                </FormTitle>
                <FormInput autoCapitalize='none' placeholder='User'/>
                <FormInput autoCapitalize='none' placeholder='Password'/>
                <Row>
                    <Icon name='ios-checkmark-circle'/>
                    <FormLabel>
                        Manter conectado
                    </FormLabel>
                </Row>
                <FormSubmit>
                    <SubmitLabel>
                        Entrar
                    </SubmitLabel>
                </FormSubmit>
            </FormLoginContainer>
        </Container>
    )
}
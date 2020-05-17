import React from 'react'
import { StatusBar } from 'react-native'
import {
    Container,
    FormLoginContainer,
    FormTitle,
    FormInput,
    FormSubmit,
    SubmitLabel
} from './styles'

export default function SignUp() {

    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <FormLoginContainer>
                <FormTitle>
                    Sign Up
                </FormTitle>
                <FormInput placeholder='Name'/>
                <FormInput autoCapitalize='none' placeholder='User'/>
                <FormInput secureTextEntry={true} autoCapitalize='none' placeholder='Password'/>
                
                <FormSubmit>
                    <SubmitLabel>
                        Cadastrar
                    </SubmitLabel>
                </FormSubmit>
            </FormLoginContainer>
        </Container>
    )
}
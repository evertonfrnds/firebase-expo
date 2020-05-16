import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import {View} from 'react-native'
import {
    Container,
    FormLoginContainer,
    FormTitle,
    FormInput,
    Row,
    Icon,
    FormLabel,
    FormSubmit,
    SubmitLabel,
    SingUpContainer,
    SingUpLabel
} from './styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function SignIn({ navigation }) {
    const [keepConnect, setKeepConnect] = useState(true)
    return (
        <Container>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <FormLoginContainer>
                <FormTitle>
                    Sign In
                </FormTitle>
                <FormInput autoCapitalize='none' placeholder='User' />
                <FormInput secureTextEntry={true} autoCapitalize='none' placeholder='Password' />
                <Row>
                    <TouchableWithoutFeedback onPress={()=>setKeepConnect(!keepConnect)}>
                        <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <Icon name={keepConnect ? 'ios-checkmark-circle' : 'ios-radio-button-off'} />
                            <FormLabel>
                                Manter conectado
                        </FormLabel>
                        </View>
                    </TouchableWithoutFeedback>
                </Row>
                <FormSubmit>
                    <SubmitLabel>
                        Entrar
                    </SubmitLabel>
                </FormSubmit>
            </FormLoginContainer>
            <SingUpContainer>
                <SingUpLabel>
                    Não tem conta?{' '}
                </SingUpLabel>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
                    <SingUpLabel color='#00D2FC'>
                        Cadastre-se
                </SingUpLabel>
                </TouchableWithoutFeedback>
            </SingUpContainer>
        </Container>
    )
}
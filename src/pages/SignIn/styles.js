import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from '@expo/vector-icons';

export const Container = styled(LinearGradient).attrs({
    colors:['#845EC2', '#C493FF'],
    start:{x: 0, y:0},
    end:{x: 1, y: 1}
})`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const FormLoginContainer = styled.View`
    background-color: #fff;
    width: 80%;
    min-height: 100px;
    border-radius: 10px;
    align-items: center;
    padding: 5px;
`;
export const FormTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`;
export const FormInput = styled.TextInput`
    padding: 10px 15px;
    background-color: #f3f3f3;
    width: 90%;
    margin-top: 15px;
    border-radius: 5px;
`;
export const Row = styled.View`
    flex-direction: row;
    width:90%;
    margin-top: 15px;
    align-items: center;
`;
export const Icon = styled(Ionicons).attrs({
    size:24,
    color: '#00C9A7'
})``;
export const FormLabel = styled.Text`
    color: #555;
    margin-left: 10px;
`;
export const FormSubmit = styled.TouchableOpacity`
    background-color: #00C9A7;
    width: 90%;
    padding:15px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`;
export const SubmitLabel = styled.Text`
    font-weight:bold;
    color: white;
`;
export const SingUpContainer = styled.View`
    padding: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;
export const SingUpLabel = styled.Text`
    color: ${p=>p.color?p.color:'white'};
`;
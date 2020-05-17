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

export const FormSubmit = styled.TouchableOpacity`
    background-color: #00C9A7;
    width: 90%;
    padding:15px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;
export const SubmitLabel = styled.Text`
    font-weight:bold;
    color: white;
`;
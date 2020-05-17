import styled from 'styled-components/native'
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
    background-color: white;
    height: 100px;
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
`;
export const UserContainer = styled.View`
`;
export const Name = styled.Text`
    font-weight:bold;
    margin-bottom: 5px;
`;
export const Label = styled.Text`
    color: #666;
`;
export const Icon = styled(Ionicons).attrs({
    color: '#666',
    name: 'ios-arrow-forward',
    size: 24
})``;

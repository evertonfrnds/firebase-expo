import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons} from '@expo/vector-icons';

export const Container = styled(LinearGradient).attrs({
    colors:['#845EC2', '#C493FF'],
    start:{x: 0, y:0},
    end:{x: 1, y: 1}
})`
    flex: 1;
    align-items: center;
    padding: 10px 30px;
`;
export const Header = styled.Text`
    margin-top: 40px;
    font-weight: bold;
    color: white;
    font-size: 18px;
    margin-bottom: 20px;
`;
export const SearchBar = styled.View`
    flex-direction: row;
    background: white;
    width: 100%;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

`;
export const SearchInput = styled.TextInput`
`;
export const SearchIcon = styled(Ionicons).attrs({
    size: 24,
    color: '#999'
})`
    
`;
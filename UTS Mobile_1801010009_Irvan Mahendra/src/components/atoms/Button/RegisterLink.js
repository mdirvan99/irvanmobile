import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const RegisterLink = ({...rest}) => {
    return (
        <TouchableOpacity {...rest}>
            {rest.name === 'regis' && <Text style={{color:"green", textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>Daftar</Text>}
        </TouchableOpacity>
    )
}

export default RegisterLink;
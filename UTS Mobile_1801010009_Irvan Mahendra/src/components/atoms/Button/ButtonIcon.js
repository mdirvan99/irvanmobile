import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconBack } from '../../../assets';

const ButtonIcon = ({...rest}) => {
    return (
        <TouchableOpacity {...rest}>
            {rest.name === 'back' && <Image source={IconBack} style={{ width: 25, height:25 }} />}
        </TouchableOpacity>
    )
}

export default ButtonIcon;
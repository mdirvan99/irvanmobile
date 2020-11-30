import React from 'react';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../../utils';
import BookedBtn from './Booked';
import BookingBtn from './BookingBtn';
import ButtonIcon from './ButtonIcon';
import RegisterLink from './RegisterLink';

const Button = ({title, onPress, type, name}) => {
    if (type === 'icon') {
        return <ButtonIcon name={name} onPress={onPress} />
    } else if (type === 'textRegis') {
        return <RegisterLink name={name} onPress={onPress} />
    } else if (type === 'bookingbtn') {
        return <BookingBtn name={name} onPress={onPress} />
    } else if (type === 'booked') {
        return <BookedBtn name={name} onPress={onPress} />
    }
    return (
        <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
            <Text style={styles.text.title}>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = {
    wrapper: {
        component: { 
            backgroundColor: colors.default, 
            borderRadius: 25, 
            paddingVertical: 13 
        }
    },
    text: {
        title: { 
            color: '#fff', 
            fontSize: 18, 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            textAlign: 'center' 
        }
    }
}

export default Button;
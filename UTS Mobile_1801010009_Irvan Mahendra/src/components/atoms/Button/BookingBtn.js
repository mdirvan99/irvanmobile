import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const BookingBtn = ({...rest}) => {
    return (
        <TouchableOpacity {...rest}>
            {rest.name === 'booking' && <Text style={styles.text}>Pesan</Text>}
        </TouchableOpacity>
    )
}

const styles = {
    text: {
        color: colors.default, 
        fontWeight: 'bold', 
        fontSize: 18,
        marginTop: 4,
    }
}

export default BookingBtn;
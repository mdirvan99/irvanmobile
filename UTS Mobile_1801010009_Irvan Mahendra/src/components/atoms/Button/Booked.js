import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const BookedBtn = ({...rest}) => {
    return (
        <TouchableOpacity {...rest}>
            {rest.name === 'booked' && <Text style={styles.text}>Dipesan</Text>}
        </TouchableOpacity>
    )
}

const styles = {
    text: {
        color: '#e74c3c', 
        fontWeight: 'bold', 
        fontSize: 18,
    }
}

export default BookedBtn;
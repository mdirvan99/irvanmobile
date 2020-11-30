import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../../components';

const ActionButton = ({ desc, title, onPress }) => {
    return (
        <View style={styles.wrapper.component}>
            <Text style={styles.text.desc}>{ desc }</Text>
            <Button title={title} onPress={onPress} />
        </View>
    )
}

const styles = {
    wrapper: {
        component: { 
            marginBottom: 43, 
            maxWidth: 275 
        }
    },
    text: {
        desc: { 
            fontSize: 14, 
            color: '#00B0FF', 
            textAlign: 'center', 
            paddingHorizontal: '15%', 
            marginBottom: 6 
        }
    }
}

export default ActionButton;
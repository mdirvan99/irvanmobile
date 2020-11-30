import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components';

const ActionButton = ({ title, onPress }) => {
    return (
        <View style={styles.wrapper.component}>
            <Button title={title} onPress={onPress} />
        </View>
    )
}

const styles = {
    wrapper: {
        component: { 
            marginBottom: 43, 
        }
    }
}

export default ActionButton;
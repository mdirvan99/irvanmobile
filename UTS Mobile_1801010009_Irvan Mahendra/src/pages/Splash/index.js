import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { logoWhite } from '../../assets';
import { colors } from '../../utils';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WellcomeAuth'); // for replace splash creen in to login page
        }, 2000);
    });
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image source={logoWhite} style={styles.illustration} />
            </View>
        </View>
    )
}

const styles = {
    wrapper: {
        padding: 20, 
        backgroundColor: colors.default, 
        flex: 1 
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    illustration: {
        width: 200, 
        height: 200,
        marginTop: 28,
    }
}

export default Splash;
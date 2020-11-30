import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button, Input } from '../../components';
import { logoPage } from '../../assets';
import ActionButton from './ActionButton';
import { colors } from '../../utils';

const Login = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return (
        <View style={styles.wrapper.pages}>
            <Button type="icon" name="back" onPress={() => navigation.goBack()} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={logoPage} style={styles.illustration} />
            </View>
            <Text style={styles.text.desc}>Masuk ke Account Anda</Text>
            
            <View style={styles.space(25)} />
            <Input placeholder="Email" />
            <View style={styles.space(18)} />
            <Input placeholder="Password" />
            <View style={styles.space(18)} />

            <ActionButton title="Masuk" onPress={() => handleGoTo('Main')} />
            <Text style={styles.text.announce}>Belum punya account?</Text>
            <Button type="textRegis" name="regis" onPress={() => handleGoTo('Register')} />
        </View>
    )
}

const styles = {
    wrapper: {
        pages: { 
            padding: 20, 
            backgroundColor: '#fff', 
            flex: 1 
        }
    },
    illustration: { 
        width: 106, 
        height: 115,
        marginTop: 28,
    },
    text: {
        desc: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: '#777', 
            marginTop: 53, 
            maxWidth: 250 
        },
        announce: {
            fontSize: 14,
            color: colors.dark,
            textAlign: 'center'
        }
    },
    space: value => {
        return {
            height: value //untuk mengatur padding dalam form secara dinamis
        }
    }
}

export default Login;
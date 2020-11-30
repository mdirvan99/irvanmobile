import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button, Input } from '../../components';
import { logoPage } from '../../assets';
import ActionButton from './ActionButton';

const Register = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return (
        <View style={styles.wrapper.pages}>
            <Button type="icon" name="back" onPress={() => navigation.goBack()} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={logoPage} style={styles.illustration} />
            </View>
            <Text style={styles.text.desc}>Buat Akun Anda</Text>
            
            <View style={styles.space(25)} />
            <Input placeholder="Email" />
            <View style={styles.space(18)} />
            <Input placeholder="Password" />
            <View style={styles.space(18)} />
            <Input placeholder="Confirm Password" />
            <View style={styles.space(26)} />

            <ActionButton title="Daftar" onPress={() => handleGoTo('Login')} />
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
        }
    },
    space: value => {
        return {
            height: value
        }
    }
}

export default Register;
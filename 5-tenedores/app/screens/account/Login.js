import React, { useRef }from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-easy-toast';
import LoginForm from '../../components/account/LoginForm';

export default function Login() {
    const toastRef = useRef();

    return (
        <KeyboardAwareScrollView>
            <Image
                source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
                resizeMode='contain'
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}/>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
            <Text>Social Login</Text>
            <Toast ref={toastRef} position='center' opacity={0.9}/>
        </KeyboardAwareScrollView>
    );
};

function CreateAccount() {
    const navigation = useNavigation();

    return (
        <Text style={styles.textRegister}>
            Aún no tienes cuenta? {' '}
            <Text
                style={styles.btnRegister}
                onPress={() => navigation.navigate('register')}
            >Regístrate</Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 150,
        marginTop: 20,
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegister: {
        color: '#00a680',
        fontWeight: 'bold',
    },
    divider: {
        backgroundColor: '#00a680',
        margin: 40,
    }
});
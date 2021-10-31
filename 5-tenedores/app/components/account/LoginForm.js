import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { validateEmail } from '../../utils/Validations';
import { size, isEmpty } from 'lodash';

export default function LoginForm(props) {
    const { toastRef } = props;
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue()); 

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
    };

    const onSubmit = () => {
        /*if (isEmpty(formData.email) || isEmpty(formData.password)) {
            toastRef.current.show('Todos los campos son obligatorios');
        }else if (!validateEmail(formData.email)) {
            toastRef.current.show('El email no es correcto');
        }else if (size(formData.password) < 6) {
            toastRef.current.show('La contaseña tiene que tener al menos 6 caracteres');
        }else {
            setLoading(true);
            firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then(() => {
                setLoading(false);
                navigation.navigate('accounts');
            })
            .catch(() => {
                setLoading(false);
                toastRef.current.show('El email ya está en uso')
            });
        };*/
            //console.log(formData)
            toastRef.current.show('Todos los campos son obligatorios');
    };

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electrónico'
                containerStyle={styles.inputForm}
                onChange={e => onChange(e, 'email')}
                rightIcon={
                    <Icon
                        type='material-community'
                        name='at'
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder='Constraseña'
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, 'password')}
                password={true}
                secureTextEntry={showPass ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showPass ? 'eye-off-outline' : 'eye-outline'}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPass(!showPass)}
                    />
                }
            />
            <Button
                title='Iniciar sesión'
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
        </View>
    );
};

function defaultFormValue(){
    return {
        email: '',
        password: '',
    };
};

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    inputForm: {
        width: '100%',
        marginTop: 20,
    },
    btnContainerLogin: {
        marginTop: 20,
        width: '95%',
    },
    btnLogin: {
        backgroundColor: '#00a680',
    },
    iconRight: {
        color: '#c1c1c1',
    }
})
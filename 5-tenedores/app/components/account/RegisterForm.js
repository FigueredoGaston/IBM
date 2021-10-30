import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Icon, Button} from 'react-native-elements';

export default function RegisterForm() {
    const [showPass, setShowPass] = useState(false);
    const [showRepeatPass, setShowRepeatPass] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue())

    const onSubmit = () => {
        console.log(formData)
    };

    const onChange = (e, type) => {
        setFormData({...formData, [type]: e.nativeEvent.text})
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
            <Input
                placeholder='Repetir contraseña'
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, 'repeatPassword')}
                password={true}
                secureTextEntry={showRepeatPass ? false : true}
                rightIcon={
                    <Icon
                        type='material-community'
                        name={showRepeatPass ? 'eye-off-outline' : 'eye-outline'}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowRepeatPass(!showRepeatPass)}
                    />
                }
            />
            <Button
                title='Unirse'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    );
};

function defaultFormValue(){
    return {
        email: '',
        password: '',
        repeatPassword: '',
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
    btnContainerRegister: {
        marginTop: 20,
        width: '95%',
    },
    btnRegister: {
        backgroundColor: '#00a680',
    },
    iconRight: {
        color: '#c1c1c1',
    }
});
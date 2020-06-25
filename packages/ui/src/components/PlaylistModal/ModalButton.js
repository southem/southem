/* eslint-disable */
import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    buttonText: {
        color: '#2c2c2c',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },
    button: {
        height: 50,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: '#dfdfdf',
    },
    icon: {
        width: 28,
        height: 28,
        marginLeft: 10,
        marginRight: 30,
    },
});

export default ({
                    style,
                    onPress,
                    icon,
                    textStyle,
                    children,
                }) =>
    <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.button, style]}
        onPress={onPress}>
        <Icons style={styles.icon} name={icon} size={25} />
        <Text style={[styles.buttonText, textStyle]}>
            {children}
        </Text>
    </TouchableOpacity>;

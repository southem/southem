/* eslint-disable */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { Touchable } from '@ui/common';

const colorSelected = 'rgba(103,58,183, 1)';
const styles = StyleSheet.create({
    container: {
        height: 85,
        width: Dimensions.get('window').width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Avenir',
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
});

export default class ShareButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        image: Image.propTypes.source,
    };

    render() {
        const { title, onPress, image } = this.props;

        return (
            <Touchable onPress={onPress}>
                <View style={styles.container}>
                    {
                     image && (<Image
                         style={styles.icon}
                         source={image}
                     />)
                    }
                    <Text numberOfLines={1} style={{ color: colorSelected }}>{title}</Text>
                </View>
            </Touchable>
        );
    }
}

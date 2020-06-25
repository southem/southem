/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Animated,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { Touchable } from '@ui/common';
import { device } from '@core/utils';
import { translate } from '@core/localization';

const { width } = device;
const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        width,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        zIndex: 99,
    },

    message: {
        fontFamily: 'HelveticaNeue-Light',
        marginLeft: 5,
        width: width - 60,
        fontSize: 13,
    },

    done: {
        fontFamily: 'HelveticaNeue-Light',
        color: '#ff4081',
    },
});

class Notification extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        close: PropTypes.func.isRequired,
        message: PropTypes.string,
        color: PropTypes.string.isRequired,
    };

    static defaultProps = {
        color: 'rgba(0,0,0,.75)',
    };

    state = {
        height: new Animated.Value(0),
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            StatusBar.setHidden(true, true);

            Animated.timing(this.state.height, {
                toValue: 60,
                duration: 200,
                delay: 200,
            }).start();
        } else {
            Animated.timing(this.state.height, {
                toValue: 0,
                duration: 300,
            }).start(() => {
                StatusBar.setHidden(true, true);
            });
        }
    }

    render() {
        const height = this.state.height;
        const opacity = height.interpolate({
            inputRange: [0, 60],
            outputRange: [0, 1],
        });

        return (
            <Animated.View style={[styles.container, {
                height,
                opacity,
            }]}>
                <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.message, {
                    color: this.props.color,
                }]}>{this.props.message}
                </Text>
                <Touchable onPress={this.props.close}>
                    <Text style={styles.done}>{translate('notifications.modal.done')}</Text>
                </Touchable>
            </Animated.View>
        );
    }
}

export default Notification;

/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { theming } from '@core/themes';
import { nodeType } from '@ui/common';

import { getStatusBarHeight, ifIphoneX } from '@core/utils';
import BodyComponent from './BodyComponent';

@theming('Notification')
class Notification extends Component {
    static propTypes = {
        closeInterval: PropTypes.number,
        duration: PropTypes.number.isRequired,
        height: PropTypes.number,
        topOffset: PropTypes.number,
        backgroundColor: PropTypes.string,
        notificationBodyComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        iconApp: nodeType,
    };

    static defaultProps = {
        closeInterval: 4000,
        duration: 200,
        height: 80,
        topOffset: 0,
        backgroundColor: 'white',
        notificationBodyComponent: BodyComponent,
        iconApp: {
            type: 'ionicon',
            name: 'notifications',
            siz: 40,
        },
    };

    currentNotificationInterval = null;
    heightOffset = ifIphoneX(getStatusBarHeight(), 0);

    state = {
        animatedValue: new Animated.Value(0),
        isOpen: false,
    };

    show = (
        {title, message, onPress, icon, vibrate, cancel, type} = {
            title: '',
            message: '',
            onPress: null,
            icon: null,
            cancel: null,
            type: 'default',
            vibrate: true
        },
    ) => {
        const {closeInterval} = this.props;
        const {isOpen} = this.state;

        clearTimeout(this.currentNotificationInterval);

        const showNotificationWithStateChanges = () => {
            this.setState(
                {isOpen: true, title, message, onPress, icon, cancel, type, vibrate},
                () => this.showNotification(() => {
                    this.currentNotificationInterval = setTimeout(() => {
                        this.setState(
                            {
                                isOpen: false,
                                title: '',
                                message: '',
                                onPress: null,
                                icon: null,
                                cancel: null,
                                type: 'default',
                                vibrate: true
                            },
                            this.closeNotification,
                        );
                    }, closeInterval);
                }),
            );
        };

        if (isOpen) {
            this.setState({isOpen: false}, () => {
                this.closeNotification(showNotificationWithStateChanges);
            });
        } else {
            showNotificationWithStateChanges();
        }
    };

    showNotification = (done) => {
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: this.props.duration,
        }).start(done instanceof Function ? done : () => {
        });
    };

    closeNotification = (done) => {
        Animated.timing(this.state.animatedValue, {
            toValue: 0,
            duration: this.props.duration,
        }).start(done instanceof Function ? done : () => {
        });
    };

    render() {
        const {
            height: baseHeight,
            topOffset,
            backgroundColor,
            iconApp,
            style,
            notificationBodyComponent: BodyComponent,
        } = this.props;
        const {
            animatedValue,
            title,
            message,
            onPress,
            isOpen,
            icon,
            vibrate,
            cancel,
            type
        } = this.state;
        const height = baseHeight + this.heightOffset;

        return isOpen && (
            <Animated.View style={[
                style,
                {height, backgroundColor},
                {
                    transform: [
                        {
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-height + topOffset, 0],
                            }),
                        },
                    ],
                    opacity: animatedValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    })
                },
            ]}>
                <BodyComponent
                    {...{
                        title, message, onPress, isOpen, iconApp, icon, cancel, type, vibrate,
                        onClose: () => {
                            //clear timeout
                            clearTimeout(this.currentNotificationInterval);
                            this.setState({isOpen: false}, this.closeNotification)
                        },
                        closeNotification: this.closeNotification
                    }}
                />
            </Animated.View>
        );
    }
}

export default Notification;

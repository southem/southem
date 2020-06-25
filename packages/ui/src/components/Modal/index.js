/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Animated,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { inject } from 'mobx-react';
import { translate } from '@core/localization';
import { Button } from '@ui/common';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'rgba(0,0,0,.3)',
        zIndex: 99,
    },

    options: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width,
        backgroundColor: '#dfdfdf',
    },

    title: {
        fontSize: 13,
        fontWeight: '100',
        color: '#333',
    },

    cancel: {
        fontWeight: '100',
        fontSize: 13,
        color: 'red',
        letterSpacing: 1,
    },
});

@inject(({ modal: { shared }, app: { locale } }) => ({ shared, locale }))
class Modal extends Component {
    static propTypes = {
        locale: PropTypes.string.isRequired,
        shared: PropTypes.object.isRequired,
        show: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                icon: PropTypes.string,
                title: PropTypes.string.isRequired,
                callback: PropTypes.func.isRequired,
            })
        ).isRequired,
        close: PropTypes.func.isRequired,
    };

    state = {
        show: false,
        fadein: new Animated.Value(0),
        translateY: new Animated.Value(height),
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.setState({
                show: true,
            });

            Animated.timing(this.state.fadein, {
                toValue: 1,
                duration: 300,
            }).start(() => {
                Animated.timing(this.state.translateY, {
                    toValue: 0,
                    duration: 200,
                }).start();
            });
        } else {
            Animated.timing(this.state.translateY, {
                toValue: height,
                duration: 200,
            }).start(() => {
                Animated.timing(this.state.fadein, {
                    toValue: 0,
                    duration: 200,
                }).start(() => {
                    this.setState({
                        show: false,
                    });
                });
            });
        }
    }

    render() {
        const { items, locale } = this.props;
        const backgroundColor = this.state.fadein.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,.3)'],
        });
        const opacity = this.state.translateY.interpolate({
            inputRange: [0, height],
            outputRange: [1, 0],
        });

        if (!this.props.show && !this.state.show) {
            return false;
        }

        return (
            <Animated.View style={[styles.container, {
                backgroundColor,
            }]}>
                <Animated.View style={[styles.options, {
                    transform: [{
                        translateY: this.state.translateY,
                    }],
                    opacity,
                }]}>

                    {
                        items.map((e, index) => {
                            return (
                                <Button
                                    style={[index === items.length - 1 && { borderBottomWidth: 0 }]}
                                    key={index}
                                    icon={e.icon}
                                    onPress={() => {
                                        const callback = e.callback;

                                        if (typeof callback === 'function') {
                                            setTimeout(callback, 300);
                                        }
                                        this.props.close();
                                    }}>
                                    <Text style={styles.title}>{e.title}</Text>
                                </Button>
                            );
                        })
                    }

                    <Button
                        onPress={this.props.close}
                        icon={'close'}
                        style={{ marginTop: 5 }}>
                        <Text style={styles.cancel}>{translate('common.cancel', locale)}</Text>
                    </Button>
                </Animated.View>
            </Animated.View>
        );
    }
}

export default Modal;

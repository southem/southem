/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Animated,
    StyleSheet,
    Dimensions,
    PanResponder,
    TouchableOpacity,
} from 'react-native';
import { inject } from 'mobx-react/native';
import { translate } from '@core/localization';
import { Button, Modal as UIModal  } from '@ui/common';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'rgba(0,0,0,.3)',
        zIndex: 99,
    },
    /**
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: 0,
        overflow: "hidden"
    },
    **/

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

    wrapper: {
        flex: 1,
        backgroundColor: "#00000077"
    },
    mask: {
        flex: 1,
        backgroundColor: "transparent"
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
        animatedHeight: new Animated.Value(0),
        pan: new Animated.ValueXY(),
    };
    panResponder: PanResponder = null;

    createPanResponder = (props) => {
        const { closeOnDragDown, height } = props;
        const { pan } = this.state;
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => closeOnDragDown,
            onPanResponderMove: (e, gestureState) => {
                if (gestureState.dy > 0) {
                    Animated.event([null, { dy: pan.y }])(e, gestureState);
                }
            },
            onPanResponderRelease: (e, gestureState) => {
                if (height / 4 - gestureState.dy < 0) {
                    this.setModalVisible(false);
                } else {
                    Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
                }
            }
        });
    };

    componentWillReceiveProps(nextProps) {
        this.createPanResponder(nextProps)
    }

    setModalVisible = (visible) => {
        const { height, minClosingHeight, duration, close } = this.props;
        const { animatedHeight, pan } = this.state;
        if (visible) {
            this.setState({ show: visible });
            Animated.timing(animatedHeight, {
                toValue: height,
                duration
            }).start();
        } else {
            Animated.timing(animatedHeight, {
                toValue: minClosingHeight,
                duration
            }).start(() => {
                pan.setValue({ x: 0, y: 0 });
                this.setState({
                    show: visible,
                    animatedHeight: new Animated.Value(0)
                });

                if (typeof close === "function") close();
            });
        }
    };

    open = () => {
        this.setModalVisible(true);
    };

    close = () => {
        this.setModalVisible(false);
    };

    render() {
        const {
            animationType,
            items,
            show: modalVisible,
            close,
            locale
        } = this.props;
        const { animatedHeight, pan, show } = this.state;
        const panStyle = {
            transform: pan.getTranslateTransform()
        };

        if (!modalVisible && !show) {
            return false;
        }

        return (
            <UIModal
                transparent
                animationType={animationType}
                visible={show}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}>
                <Animated.View style={[styles.wrapper]}>
                    <TouchableOpacity
                        style={styles.mask}
                        activeOpacity={1}
                        onPress={() => (close ? this.close() : {})}
                    />
                    <Animated.View
                        {...this.panResponder.panHandlers}
                        style={[panStyle, styles.container, { height: animatedHeight }]}>
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
            </UIModal>
        );
    }
}

export default Modal;

/**
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
 **/

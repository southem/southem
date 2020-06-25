/* eslint-disable */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Animated,
    StyleSheet,
    PanResponder,
    LayoutAnimation,
    TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { shorten, device } from '@core/utils';
import { translate } from '@core/localization';
import { Button } from '@ui/common';
import Shares from './Shares';
import Options from './Options';

const { width, height } = device;
const defaultHeight = height * 0.67;
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        zIndex: 99,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        borderRadius: 10,
        ...StyleSheet.absoluteFillObject,
    },
    modal: {
        backgroundColor: 'white',
    },
    songContainer: {
        flex: 1,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        margin: 20,
        marginBottom: 0,
    },
    sectionHeader: {
        fontFamily: 'Avenir',
        color: '#aaa',
    },
    footer: {
        padding: 10,
    },
    songInfo: {
        backgroundColor: 'transparent',
    },
    genre: {
        fontFamily: 'Avenir',
        color: '#bbb',
        fontSize: 14,
    },
    title: {
        fontFamily: 'Avenir',
        fontSize: 20,
    },
    titleItem: {
        fontSize: 13,
        fontWeight: '100',
        color: '#333',
    },
    item: {
        height: 40,
        backgroundColor: '#fff',
        borderBottomWidth: 0.3,
        borderBottomColor: '#dfdfdf',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancel: {
        fontWeight: '100',
        fontSize: 13,
        color: '#fff',
        letterSpacing: 1,
    },
    buttonContainer: {
        backgroundColor: '#aaa',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
});

@inject(({ share: { shared }, app: { locale } }) => ({ shared, locale }))
class Share extends Component {
    static propTypes = {
        locale: PropTypes.string.isRequired,
        shared: PropTypes.object.isRequired,
        show: PropTypes.bool.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.object.isRequired,
                title: PropTypes.string.isRequired,
                callback: PropTypes.func.isRequired,
            })
        ).isRequired,
        close: PropTypes.func.isRequired,
    };

    state = {
        translateY: new Animated.Value(height),
        position: new Animated.Value(this.props.show ? 0 : height),
        opacity: new Animated.Value(0),
        height: defaultHeight,
        expanded: false,
        visible: this.props.show,
    };

    _previousHeight = 0;

    componentDidMount() {
        // Initialize PanResponder to handle move gestures
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                const { dx, dy } = gestureState;
                // Ignore taps

                if (dx !== 0 && dy === 0) {
                    return true;
                }

                return false;
            },
            onPanResponderGrant: (evt, gestureState) => {
                // Store previous height before user changed it
                this._previousHeight = this.state.height;
            },
            onPanResponderMove: (evt, gestureState) => {
                // Pull delta and velocity values for y axis from gestureState
                const { dy, vy } = gestureState;
                // Subtract delta y from previous height to get new height
                const newHeight = this._previousHeight - dy;

                // Animate heigh change so it looks smooth
                LayoutAnimation.easeInEaseOut();

                // Switch to expanded mode if popup pulled up above 80% mark
                if (newHeight > height - height / 5) {
                    this.setState({ expanded: true });
                } else {
                    this.setState({ expanded: false });
                }

                // Expand to full height if pulled up rapidly
                if (vy < -0.75) {
                    this.setState({
                        expanded: true,
                        height,
                    });
                }

                // Close if pulled down rapidly
                else if (vy > 0.75) {
                    this.props.close();
                }
                // Close if pulled below 75% mark of default height
                else if (newHeight < defaultHeight * 0.75) {
                    this.props.close();
                }
                // Limit max height to screen height
                else if (newHeight > height) {
                    this.setState({ height });
                } else {
                    this.setState({ height: newHeight });
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                const { dy } = gestureState;
                const newHeight = this._previousHeight - dy;

                // Close if pulled below default height
                if (newHeight < defaultHeight) {
                    this.props.close();
                }

                // Update previous height
                this._previousHeight = this.state.height;
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                return true;
            },
        });
    }

    componentWillReceiveProps(nextProps) {
        // show prop changed to true from false
        if (!this.props.show && nextProps.show) {
            this.animateOpen();
        } else if (this.props.show && !nextProps.show) {
            // show prop changed to false from true
            this.animateClose();
        }
    }

    animateOpen = () => {
        // Update state first
        this.setState({ visible: true }, () => {
            Animated.parallel([
                // Animate opacity
                Animated.timing(this.state.opacity, { toValue: 0.5 }), // semi-transparent
                // And slide up
                Animated.timing(this.state.position, { toValue: 0 }), // top of the screen
            ]).start();
        });
    };

    animateClose = () => {
        Animated.parallel([
            // Animate opacity
            Animated.timing(this.state.opacity, { toValue: 0 }), // transparent
            // Slide down
            Animated.timing(this.state.position, { toValue: height }), // bottom of the screen
        ]).start(() => this.setState({
            // Reset to default values
            height: defaultHeight,
            expanded: false,
            visible: false,
        }));
    };

    getStyles = () => {
        return {
            imageContainer: this.state.expanded ? {
                width: width / 2,
            } : {
                maxWidth: 110,
                marginRight: 10,
            },
            songContainer: this.state.expanded ? {
                flexDirection: 'column',
                alignItems: 'center',
            } : {
                flexDirection: 'row',
            },
            songInfo: this.state.expanded ? {
                flex: 0,
                alignItems: 'center',
                paddingTop: 20,
            } : {
                flex: 1,
                justifyContent: 'center',
            },
            title: this.state.expanded ? {
                textAlign: 'center',
            } : {},
        };
    };

    render() {
        const { items, shared, locale } = this.props;
        const { title, thumbnail, description } = shared || {};

        if (!this.props.show && !this.state.visible) {
            return false;
        }

        return (
            <View style={styles.container}>
                {/* closes modal if user taps on semi-transparent backdrop */}
                <TouchableWithoutFeedback onPress={this.props.close}>
                    <Animated.View style={[styles.backdrop, { opacity: this.state.opacity }]}/>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={[styles.modal, {
                        height: this.state.height,
                        transform: [{ translateY: this.state.position }, { translateX: 0 }]
                    }]}>
                    {/* Content */}
                    <View style={styles.content}>
                        {/* Song thumbnail, title and description */}
                        <View
                            style={[styles.songContainer, this.getStyles().songContainer]}
                            {...this._panResponder.panHandlers}>
                            {/* Poster */}
                            <View style={[styles.imageContainer, this.getStyles().imageContainer]}>
                                <Image source={{ uri: thumbnail }} style={styles.image} />
                            </View>
                            {/* Title and description */}
                            <View style={[styles.songInfo, this.getStyles().songInfo]}>
                                <Text numberOfLines={1} style={[styles.title, this.getStyles().title]}>{shorten(title)}</Text>
                                <Text numberOfLines={1} style={styles.genre}>{shorten(description)}</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                {/* Items */}
                                <Text style={styles.sectionHeader}>{translate('notifications.modal.shares', locale)}</Text>
                                <Shares
                                    items={items}
                                    onClose={this.props.close}
                                    onPress={(share) => {
                                        const callback = share.callback;

                                        if (typeof callback === 'function') {
                                            setTimeout(callback, 300);
                                        }
                                        this.props.close();
                                    }}
                                />
                            </View>

                            <View>
                                {/* Items */}
                                <Text style={styles.sectionHeader}>{translate('notifications.modal.params', locale)}</Text>
                                <Options
                                    items={[{
                                        title: 'Chromecast',
                                        callback: () => {},
                                        image: { uri: 'data:image/png;base64,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'},
                                    }]}
                                    onClose={this.props.close}
                                    onPress={(share) => {
                                        const callback = share.callback;

                                        if (typeof callback === 'function') {
                                            setTimeout(callback, 300);
                                        }
                                        this.props.close();
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    {/* Footer */}
                    <View style={styles.footer}>
                        <Button
                            onPress={this.props.close}
                            buttonStyle={[styles.buttonContainer, { marginTop: 5 }]}
                            titleStyle={styles.cancel}
                            title={translate('common.cancel', locale)}
                        />
                    </View>
                </Animated.View>
            </View>
        );
    }
}

export default Share;

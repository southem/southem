/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Vibration,
    StatusBar,
} from 'react-native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { theming } from '@core/themes';
import { isAndroid } from '@core/utils';
import {
    View,
    Icon,
    Button,
    Touchable,
    renderNode,
    nodeType,
} from '@ui/common';

const WrapImage = theming('WrapImage')(View);
const TouchableOpacity = theming('Touchable')(Touchable);
const Title = theming('Title')(Text);
const Message = theming('Message')(Text);

@theming('BodyComponent')
class BodyComponent extends Component {
    static propTypes = {
        style: PropTypes.object,
        title: PropTypes.string,
        message: PropTypes.string,
        vibrate: PropTypes.bool,
        isOpen: PropTypes.bool,
        onPress: PropTypes.func,
        onClose: PropTypes.func,
        icon: nodeType,
        iconApp: nodeType,
        type: PropTypes.oneOf(['default', 'info', 'success', 'warn', 'error']),
        cancel: nodeType,
    };

    static defaultProps = {
        title: 'Notification',
        message: 'This is a test notification',
        vibrate: true,
        isOpen: false,
        icon: null,
        cancel: null,
        type: 'default',
        onPress: () => null,
        onClose: () => null,
    };

    componentDidUpdate(prevProps) {
        if (this.props.isOpen !== prevProps.isOpen) {
            StatusBar.setHidden(this.props.isOpen);
        }

        if ((prevProps.vibrate || this.props.vibrate) && this.props.isOpen && !prevProps.isOpen) {
            Vibration.vibrate();
        }
    }

    onNotificationPress = () => {
        const {
            onPress,
            onClose,
        } = this.props;

        onClose();
        onPress();
    };

    onSwipe = direction => {
        const { onClose } = this.props;
        const { SWIPE_LEFT, SWIPE_RIGHT, SWIPE_UP } = swipeDirections;

        if (isAndroid()) {
            if (direction === SWIPE_RIGHT || direction === SWIPE_LEFT) {
                onClose();
            }
        } else {
            if (direction === SWIPE_UP) {
                onClose();
            }
        }
    };

    render() {
        const {
            icon,
            iconApp,
            style,
            title,
            cancel,
            message,
        } = this.props;

        return (
            <GestureRecognizer
                style={style}
                onSwipe={this.onSwipe}>
                <TouchableOpacity
                    activeOpacity={0.3}
                    underlayColor="transparent"
                    onPress={this.onNotificationPress}>
                    <WrapImage>
                        {(icon || iconApp) && renderNode(Icon, icon || iconApp)}
                    </WrapImage>
                    <View>
                        <Title numberOfLines={1}>{title}</Title>
                        <Message numberOfLines={1}>{message}</Message>
                    </View>
                    {(cancel) && renderNode(Button, cancel, {
                        type: 'ghost'
                    })}
                </TouchableOpacity>
            </GestureRecognizer>

        );
    }
}

export default BodyComponent;

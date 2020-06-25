/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, } from 'react-native';
import theming from '@core/themes/theming';
import { translate } from '@core/localization';
import { Text } from '@ui/common';
import Line from './Line';

@theming('Loader')
class Loader extends Component {
    static propTypes = {
        show: PropTypes.bool.isRequired,
        animate: PropTypes.bool,
        text: PropTypes.string,
        style4container: PropTypes.object,
        style4text: PropTypes.object,
    };

    static defaultProps = {
        text: translate('home.songs.loading'),
        animate: false,
    };

    state = {
        width: new Animated.Value(90),
    };

    animating() {
        const width = this.state.width;

        Animated.sequence([
            Animated.timing(width, {
                toValue: 15,
                duration: 1000,
            }),
            Animated.timing(width, {
                toValue: 90,
                duration: 400,
            }),
        ]).start(e => {
            if (this.props.show && this.props.animate && e.finished) {
                this.animating();
            } else {
                width.setValue(90);
            }
        });
    }

    componentDidMount() {
        if (this.props.animate) {
            this.animating();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.animate !== nextProps.animate) {
            this.animating();
        }
    }

    render() {
        const {
            show,
            text,
            style4text,
            style4container,
            style,
        } = this.props;

        if (!show) {
            return false;
        }

        return (
            <Animated.View style={[style, style4container]}>
                <Line style={{ width: this.state.width }} />
                <Text style={style4text}>{text}</Text>
                <Line style={{ width: this.state.width }} />
            </Animated.View>
        );
    }
}

export default Loader;

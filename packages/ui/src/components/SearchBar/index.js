/* eslint-disable */
import React, { Component } from 'react';
import {
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    StyleSheet,
    ActivityIndicator,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { theming } from '@core/themes';

import ViewPropTypes from '@ui/common/ViewPropTypes';
import {
    Input,
    Icon,
    renderNode,
    nodeType,
    View,
} from '@ui/common';

const IOS_GRAY = '#7d7d7d';
const defaultSearchIcon = {
    type: 'ionicon',
    size: 20,
    name: 'search',
    color: IOS_GRAY,
};
const defaultClearIcon = {
    type: 'ionicon',
    name: 'close-circle',
    size: 20,
    color: IOS_GRAY,
};

const mapPropToStyles = [];

@theming('SearchBar', mapPropToStyles)
class SearchBar extends Component {
    static displayName = 'SearchBar';

    static propTypes = {
        value: PropTypes.string,
        cancelButtonProps: PropTypes.object,
        cancelButtonTitle: PropTypes.string,
        clearIcon: nodeType,
        searchIcon: nodeType,
        loadingProps: PropTypes.object,
        showLoading: PropTypes.bool,
        onClear: PropTypes.func,
        onCancel: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onChangeText: PropTypes.func,
        containerStyle: ViewPropTypes.style,
        leftIconContainerStyle: ViewPropTypes.style,
        rightIconContainerStyle: ViewPropTypes.style,
        inputContainerStyle: ViewPropTypes.style,
        inputStyle: Text.propTypes.style,
        placeholderTextColor: PropTypes.string,
    };

    static defaultProps = {
        value: '',
        cancelButtonTitle: 'Cancel',
        loadingProps: {},
        cancelButtonProps: {},
        showLoading: false,
        onClear: () => null,
        onCancel: () => null,
        onFocus: () => null,
        onBlur: () => null,
        onChangeText: () => null,
        placeholderTextColor: IOS_GRAY,
        searchIcon: defaultSearchIcon,
        clearIcon: defaultClearIcon,
    };

    constructor(props) {
        super(props);
        const { value } = props;

        this.state = {
            hasFocus: false,
            isEmpty: value ? value === '' : true,
            cancelButtonWidth: null,
        };
    }

    focus = () => {
        this.input.focus();
    };

    blur = () => {
        this.input.blur();
    };

    clear = () => {
        this.input.clear();
        this.onChangeText('');
        this.props.onClear();
    };

    cancel = () => {
        this.blur();
        this.props.onCancel();
    };

    onFocus = () => {
        this.props.onFocus();
        UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();

        this.setState({
            hasFocus: true,
        });
    };

    onBlur = () => {
        this.props.onBlur();
        UIManager.configureNextLayoutAnimation && LayoutAnimation.easeInEaseOut();

        this.setState({
            hasFocus: false,
        });
    };

    onChangeText = text => {
        this.props.onChangeText(text);
        this.setState({ isEmpty: text === '' });
    };

    render() {
        const {
            cancelButtonProps,
            cancelButtonTitle,
            clearIcon,
            containerStyle,
            leftIconContainerStyle,
            rightIconContainerStyle,
            inputContainerStyle,
            inputStyle,
            placeholderTextColor,
            showLoading,
            loadingProps,
            searchIcon,
            style,
            ...attributes
        } = this.props;
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle, ...otherLoadingProps } = loadingProps;
        const {
            buttonStyle,
            buttonTextStyle,
            color: buttonColor,
            disabled: buttonDisabled,
            buttonDisabledStyle,
            buttonDisabledTextStyle,
            ...otherCancelButtonProps
        } = cancelButtonProps;

        return (
            <View style={StyleSheet.flatten([style, containerStyle])}>
                <Input
                    {...attributes}
                    testID="SearchInput"
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChangeText={this.onChangeText}
                    ref={input => { this.input = input; }}
                    inputStyle={StyleSheet.flatten([{ marginLeft: 6 }, inputStyle])}
                    containerStyle={{ paddingHorizontal: 0 }}
                    inputContainerStyle={StyleSheet.flatten([
                        {
                            borderBottomWidth: 0,
                            backgroundColor: '#dcdce1',
                            borderRadius: 9,
                            minHeight: 36,
                            marginLeft: 8,
                            marginRight: 8,
                        },
                        hasFocus && { marginRight: this.state.cancelButtonWidth },
                        inputContainerStyle,
                    ])}
                    leftIcon={renderNode(Icon, searchIcon, defaultSearchIcon)}
                    leftIconContainerStyle={StyleSheet.flatten([
                        { marginLeft: 8 },
                        leftIconContainerStyle,
                    ])}
                    placeholderTextColor={placeholderTextColor}
                    rightIcon={
                        <View style={{ flexDirection: 'row' }}>
                            {showLoading && (
                                <ActivityIndicator
                                    key="loading"
                                    style={StyleSheet.flatten([{ marginRight: 5 }, loadingStyle])}
                                    {...otherLoadingProps}
                                />
                            )}
                            {!isEmpty &&
                            renderNode(Icon, clearIcon, {
                                ...defaultClearIcon,
                                key: 'cancel',
                                onPress: this.clear,
                            })}
                        </View>
                    }
                    rightIconContainerStyle={StyleSheet.flatten([
                        { marginRight: 8 },
                        rightIconContainerStyle,
                    ])}
                />
                <View
                    style={StyleSheet.flatten([
                        {
                            position: 'absolute',
                            opacity: this.state.cancelButtonWidth === null ? 0 : 1,
                            right: hasFocus ? 0 : -this.state.cancelButtonWidth,
                        },
                    ])}
                    onLayout={event =>
                        this.setState({ cancelButtonWidth: event.nativeEvent.layout.width })
                    }>
                    <TouchableOpacity
                        accessibilityRole="button"
                        onPress={this.cancel}
                        disabled={buttonDisabled}
                        {...otherCancelButtonProps}>
                        <View style={[buttonStyle, buttonDisabled && buttonDisabledStyle]}>
                            <Text
                                style={[
                                    {
                                        color: '#007aff',
                                        textAlign: 'center',
                                        padding: 8,
                                        fontSize: 18,
                                    },
                                    buttonColor && { color: buttonColor },
                                    buttonTextStyle,
                                    buttonDisabled &&
                                    (buttonDisabledTextStyle || { color: '#cdcdcd' }),
                                ]}
                                disabled={buttonDisabled}
                            >
                                {cancelButtonTitle}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SearchBar;

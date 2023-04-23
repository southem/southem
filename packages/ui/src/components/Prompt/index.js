/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    Text,
    View,
    TextInput as Input,
    TouchableWithoutFeedback,
} from 'react-native';
import { theming } from '@core/themes';

const DialogOverlay = theming('Overlay')(View);
const WrapContent = theming('WrapContent')(View);
const WrapBody = theming('WrapBody')(View);
const WrapperFooter = theming('WrapperFooter')(View);
const WrapperAction = theming('WrapperAction')(View);
const ActionTitle = theming('ActionTitle')(Text);
const WrapTitle = theming('WrapTitle')(View);
const Title = theming('Title')(Text);
const TextInput = theming('WrapTextInput')(Input);

// https://github.com/github-clonner/react-native-prompt-crossplatform

@theming('Prompt')
class Prompt extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        visible: PropTypes.bool,
        defaultValue: PropTypes.string,
        placeholder: PropTypes.string,
        onCancel: PropTypes.func.isRequired,
        cancelText: PropTypes.string,
        onSubmit: PropTypes.func.isRequired,
        submitText: PropTypes.string,
        onChangeText: PropTypes.func.isRequired,
        borderColor: PropTypes.string,
        promptStyle: PropTypes.object,
        titleStyle: PropTypes.object,
        buttonStyle: PropTypes.object,
        buttonTextStyle: PropTypes.object,
        submitButtonStyle: PropTypes.object,
        submitButtonTextStyle: PropTypes.object,
        cancelButtonStyle: PropTypes.object,
        cancelButtonTextStyle: PropTypes.object,
        inputStyle: PropTypes.object,
        textInputProps: PropTypes.object,
    };

    static defaultProps = {
        visible: false,
        defaultValue: '',
        cancelText: 'Cancel',
        submitText: 'OK',
        borderColor: '#ccc',
        promptStyle: {},
        titleStyle: {},
        buttonStyle: {},
        buttonTextStyle: {},
        submitButtonStyle: {},
        submitButtonTextStyle: {},
        cancelButtonStyle: {},
        cancelButtonTextStyle: {},
        inputStyle: {},
        onChangeText: () => {},
    };

    state = {
        value: '',
        visible: false,
    };

    componentDidMount() {
        this.setState({ value: this.props.defaultValue });
    }

  UNSAFE_componentWillReceiveProps(nextProps) {
        const { visible, defaultValue } = nextProps;

        if(visible !== this.props.visible && visible) {
            this.setState({ visible, value: defaultValue });
        }
    }

    _onChangeText = value => {
        this.setState({ value });
        this.props.onChangeText(value);
    };

    _onSubmitPress = () => {
        const { value } = this.state;

        this.props.onSubmit(value);
    };

    _onCancelPress = () => {
        this.props.onCancel();
    };

    close = () => {
        this.setState({ visible: false });
    };

    _renderDialog = () => {
        const {
            title,
            placeholder,
            defaultValue,
            cancelText,
            submitText,
            borderColor,
            promptStyle,
            titleStyle,
            buttonStyle,
            buttonTextStyle,
            submitButtonStyle,
            submitButtonTextStyle,
            cancelButtonStyle,
            cancelButtonTextStyle,
            inputStyle,
            style,
        } = this.props;

        return (
            <View style={style} key="prompt">
                <DialogOverlay />
                <WrapContent style={[{ borderColor }, promptStyle]}>
                    <WrapTitle style={{ borderColor }}>
                        <Title style={titleStyle}>
                            { title }
                        </Title>
                    </WrapTitle>
                    <WrapBody>
                        <TextInput
                            style={inputStyle}
                            defaultValue={defaultValue}
                            value={this.state.value}
                            onChangeText={this._onChangeText}
                            placeholder={placeholder}
                            autoFocus
                            underlineColorAndroid="white"
                            {...this.props.textInputProps} />
                    </WrapBody>
                    <WrapperFooter style={{ borderColor }}>
                        <TouchableWithoutFeedback onPress={this._onCancelPress}>
                            <WrapperAction style={[buttonStyle, cancelButtonStyle]}>
                                <ActionTitle style={[buttonTextStyle, cancelButtonTextStyle]}>
                                    {cancelText}
                                </ActionTitle>
                            </WrapperAction>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this._onSubmitPress}>
                            <WrapperAction style={[buttonStyle, submitButtonStyle]}>
                                <ActionTitle style={[buttonTextStyle, submitButtonTextStyle]}>
                                    {submitText}
                                </ActionTitle>
                            </WrapperAction>
                        </TouchableWithoutFeedback>
                    </WrapperFooter>
                </WrapContent>
            </View>
        );
    };

    render() {
        return (
            <Modal
                animationType={'fade'}
                onRequestClose={() => this.close()}
                transparent
                visible={this.props.visible}>
                {this._renderDialog()}
            </Modal>
        );
    }
}

export default Prompt;

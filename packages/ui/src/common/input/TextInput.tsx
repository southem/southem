/* eslint-disable */
import { TextInput as RNTextInput } from 'react-native';
import { withThemes } from '@southem/theme';

const mapPropToStyles = [
    'placeholderTextColor',
    'selectionColor',
    'underlineColorAndroid',
];

const TextInput = withThemes('TextInput', mapPropToStyles)(RNTextInput);

export default TextInput;

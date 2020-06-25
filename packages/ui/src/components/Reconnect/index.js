/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Screen,
    Text,
    Image,
    View
} from '@ui/common';
import { translate, } from '@core/localization';

export default class Reconnect extends Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
    };

    render() {
        const { onPress } = this.props;
        return (
            <Screen flex center>
                <Image source={require('@assets/images/ethernet.png')} />
                <Text style={{
                    paddingTop: 20,
                    paddingBottom: 10,
                    fontSize: 48,
                    color: '#000000',
                }}>{translate('reconnect.ooops')}</Text>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 16, color: '#000000', textAlign: 'center' }}>{translate('reconnect.info')}</Text>
                </View>
                <Button
                    onPress={onPress}
                    buttonStyle={{ backgroundColor: 'white' }}
                    titleStyle={{
                        color: '#3E464D',
                        fontWeight: 'bold',
                        fontSize: 16,
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}
                    title={translate('reconnect.retry')}
                />
            </Screen>
        );
    }
};

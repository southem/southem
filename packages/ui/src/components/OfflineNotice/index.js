/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';
import { inject } from 'mobx-react';
import { Text, View } from '@ui/common';
import { translate } from '@core/localization';
import { theming } from '@core/themes';

@inject(({ app }) => ({ locale: app.locale }))
@theming('OfflineNotice')
class OfflineNotice extends PureComponent<{}> {
    static propTypes = {
        locale: PropTypes.string.isRequired,
        style: PropTypes.object,
    };

    render() {
        const { locale, style } = this.props;

        return (
            <Animated.View style={style}>
                <View>
                    <Text>{translate('common.noInternet', locale)}</Text>
                </View>
            </Animated.View>
        );
    }
}

export default OfflineNotice;

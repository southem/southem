/* eslint-disable */
import { Platform, StyleSheet } from 'react-native';
import {
    ifIphoneX,
    normalize,
    getStatusBarHeight,
} from '@southem/tools';
import palette from '../_palette';

export default {
    LeftControlContainer: {},
    RightControlsContainer: {},
    TitleContainer: {},
    SubText: {
        fontFamily: 'Fira Sans',
    },
    TopNavigationAction: {
        margin: 10,
        // @ts-ignore
        ...ifIphoneX({
            paddingTop: getStatusBarHeight(),
        }),
    },
    TopNavigation: {
        flexDirection: 'row',
        alignItems: 'stretch',
        position: 'relative',
        width: '100%',
        height: Platform.select({
            ios: ifIphoneX(90, 56),
            android: 56,
        }),
        backgroundColor: 'transparent',
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
        // shadowRadius: 12,
        // shadowOffset: {
        //     height: 2,
        // },
        LeftControlContainer: {
            flexDirection: 'row',
            zIndex: 1,
            paddingLeft: 5,
        },
        RightControlsContainer: {
            flexDirection: 'row',
            zIndex: 1,
            paddingLeft: 5,
        },
        TitleContainer: {
            ...StyleSheet.absoluteFillObject,
            paddingTop: ifIphoneX(getStatusBarHeight(), 0),
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            Title: {
                textAlign: 'center',
                fontSize: normalize(18),
                fontWeight: '600',

            },
            Subtitle: {
                color: palette.default,
                textAlign: 'center',
                fontSize: normalize(15),
            },
        },
        TopNavigationAction: {
            flexDirection: 'row',
            zIndex: 1,
        },
    },
    'TopNavigation[alignment=center]': {
        alignItems: 'center',
        justifyContent: 'space-between',
        TitleContainer: {},
    },
    'TopNavigation[alignment=start]': {
        TitleContainer: {
            alignItems: 'flex-start',
            paddingHorizontal: 10,
        },
    },
};

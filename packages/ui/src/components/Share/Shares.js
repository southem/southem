/* eslint-disable */
import React, { Component } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import ShareButton from './ShareButton';

const { width } = Dimensions.get('window');
const optionWith = (width - 0) / 3 - 10;
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
    },
    options: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: -10,
    },
});

export default class Shares extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            callback: PropTypes.func.isRequired,
            image: Image.propTypes.source,
        })).isRequired,
        onPress: PropTypes.func.isRequired,
    };
    _scrollView;

    render() {
        const { items, onPress } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView
                    ref={scrollView => { this._scrollView = scrollView; }}
                    horizontal
                    decelerationRate={0.1}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={false}
                    snapToInterval={optionWith}
                    style={styles.options}>
                    {items.map((item, index) =>
                        <View style={{ width: optionWith }}
                              key={index}>
                            <ShareButton
                                title={item.title}
                                image={item.image}
                                onPress={() => onPress(item)}
                            />
                        </View>)}
                </ScrollView>
            </View>
        );
    }
}

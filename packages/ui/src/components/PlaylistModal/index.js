/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    Modal,
    Image,
    Animated,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { inject } from 'mobx-react';
import { translate } from '@core/localization';
import { Button } from '@ui/common';
import Prompt from '../Prompt';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width,
        height,
        backgroundColor: '#f9f9f9',
        zIndex: 99,
    },

    header: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 45
    },

    headerTitle: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
        color: '#4D4D4D',
        lineHeight: 20
    },

    headerInfo: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },

    headerDescription: {
        fontSize: 12,
        color: '#676767',
        lineHeight: 18
    },

    options: {
        position: 'relative',
        left: 0,
        bottom: 0,
        width,
        backgroundColor: '#f9f9f9',
    },

    title: {
        fontSize: 13,
        fontWeight: '100',
        color: '#333',
    },

    cancel: {
        fontWeight: '100',
        fontSize: 13,
        color: 'red',
        letterSpacing: 1,
    },

    divide: {
        height: 1,
        backgroundColor: '#f6f6f6'
    },

});

class HeaderComponent extends Component {
    render () {
        return (
            <Animated.View
                style={[{
                    position: 'relative',
                    marginBottom: 10,
                }, this.props.style]}
                onLayout={this.props.onLayout}>
                <View style={styles.header}>
                    <Image
                        source={{
                            uri: this.props.song.thumbnail || 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
                        }}
                        style={{
                            width: 130,
                            height: 130
                        }}
                        borderRadius={10}
                    />
                    <Text style={styles.headerTitle}>
                        {this.props.song.title}
                    </Text>
                </View>

                <View style={styles.headerInfo}>
                    <Text
                        style={styles.headerDescription}
                        ellipsizeMode="tail"
                        numberOfLines={3}>
                        {this.props.song.channel.description}
                    </Text>
                </View>
            </Animated.View>
        )
    }
}

@inject(({ app: { locale }, session: { isLogin, user }, playlists }) => ({
    locale,
    isLogin,
    playlists: playlists.playlists,
    show: playlists.modal,
    song: playlists.songToPlaylist,
    getPlaylists: () => playlists.getPlaylists(user.id),
    addSongToPlaylist: playlists.addSongToPlaylist,
    close: () => playlists.toggle(false),
}))
class PlaylistModal extends Component {
    static propTypes = {
        locale: PropTypes.string.isRequired,
        show: PropTypes.bool.isRequired,
        playlists: PropTypes.any.isRequired,
        close: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
            headerHeight: 300,
            show: false,
            message: '',
            promptVisible: false
        };
    }

    async componentWillUpdate(nextProps, nextState) {
        if (this.props.isLogin && !this.props.playlists.length) {
            await this.props.getPlaylists();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            this.setState({
                show: true,
            });
        } else {
            this.setState({
                show: false,
            });
        }
    }

    render() {
        const { playlists, locale, song } = this.props;

        return (
            <Modal
                transparent={false}
                animationType="slide"
                visible={this.state.show}
                onRequestClose={this.props.close}>
                <View style={styles.container}>
                    <HeaderComponent
                        style={{
                            opacity: this.state.animatedValue.interpolate({
                                inputRange: [0, this.state.headerHeight],
                                outputRange: [1, 0]
                            })
                        }}
                        song={song}
                        onLayout={(event) => {
                            this.setState({
                                headerHeight: event.nativeEvent.layout.height
                            })
                        }}
                    />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        automaticallyAdjustContentInsets={false}
                        scrollEventThrottle={16}
                        onEndReachedThreshold={1}
                        onScroll={(event) => {
                            Animated.event([
                                {
                                    y: this.state.animatedValue
                                }
                            ])(event.nativeEvent.contentOffset)
                        }}>
                        <View style={styles.divide} />
                        <View style={styles.options}>
                            {
                                playlists.length === 0 && (
                                    <Button
                                        icon={{
                                            name: "playlist-add",
                                            size: 24,
                                            color: "white"
                                        }}
                                        onPress={() => {
                                            this.setState({ promptVisible: true });
                                            this.props.close();
                                        }}>
                                        <Text style={styles.title}>{'add to playlist'}</Text>
                                    </Button>)
                            }
                            {
                                playlists.length > 0 && playlists.map((e, index) => {
                                    return (
                                        <Button
                                            style={[index === playlists.length - 1 && { borderBottomWidth: 0 }]}
                                            key={index}
                                            icon={{
                                                name: "queue-music",
                                                size: 24,
                                                color: "white"
                                            }}
                                            onPress={() => {
                                                this.props.addSongToPlaylist(e);
                                                this.props.close()
                                            }}>
                                            <Text style={styles.title}>{e.title}</Text>
                                        </Button>
                                    );
                                })
                            }
                            <Prompt
                                title="Say something"
                                placeholder="Start typing"
                                defaultValue="Hello"
                                visible={this.state.promptVisible}
                                onChangeText={(text) => {

                                }}
                                onCancel={() => {
                                    this.setState({
                                        promptVisible: false,
                                        message: "You cancelled"
                                    });

                                }}
                                onSubmit={(value) => {
                                    this.setState({
                                        promptVisible: false,
                                        message: `You said "${value}"`,
                                        show: true,
                                    });
                                    this.props.close();
                                }}
                            />
                        </View>
                    </ScrollView>
                    <Button
                        onPress={this.props.close}
                        icon={{ name: 'close' }}
                        style={{ marginTop: 5 }}>
                        <Text style={styles.cancel}>{translate('common.cancel', locale)}</Text>
                    </Button>
                </View>
            </Modal>
        );
    }
}

export default PlaylistModal;

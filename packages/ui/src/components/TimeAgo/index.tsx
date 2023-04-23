/* eslint-disable */
import React, { Component } from 'react';
import moment from 'moment';
import {
  Timer,
  shallowEqual,
  blacklist,
} from '@southem/tools';
import { Text } from '../../common';

export class TimeAgo extends Component {
    // @ts-ignore
  props: {
        time: string,
        interval?: number,
        hideAgo?: boolean,
        format?: string,
    };
    state: { timer: null | number } = { timer: null };

    static defaultProps = {
        hideAgo: false,
        interval: 60000,
    };

    componentDidMount() {
        this.createTimer();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(shallowEqual(this.props, nextProps) && shallowEqual(this.state, nextState))
    }

    componentWillUnmount() {
        Timer.clearTimeout(this.state.timer);
    }

    createTimer = () => {
        this.setState({
            timer: Timer.setTimeout(() => {
                this.update();
            }, this.props.interval),
        });
    };

    update = () => {
        this.forceUpdate();
        this.createTimer();
    };

    public render() {
        const { time, hideAgo } = this.props;

        return (
            <Text {...blacklist(this.props, 'time', 'hideAgo', 'format', 'interval')}>
                {moment(time).fromNow(hideAgo)}
            </Text>
        );
    }
}

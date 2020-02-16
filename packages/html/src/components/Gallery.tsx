import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleProp,
  ViewProps,
} from 'react-native';
import {
  InlineGallery,
  InlineGalleryProps,
} from '@southem/ui';

interface StateGallery {
  selectedIndex: number;
}
type DataStore = any;

export interface GalleryProps extends InlineGalleryProps {
  data?: DataStore;
  style?: StyleProp<ViewProps>;
  handlePhotoPress?: (data: DataStore, selectedIndex: number) => void;
}

export type GalleryElement = React.ReactElement<GalleryProps>;

/**
 * Use to render a HTML gallery component.
 * Style interface correspond to InlineGallery from @southem/html.
 */
export default class Gallery extends PureComponent<GalleryProps, StateGallery> {
  state: StateGallery;

  static propTypes = {
    ...InlineGallery.propTypes,
    handlePhotoPress: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  onIndexSelected = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  handlePhotoPress = () => {
    const { data, handlePhotoPress } = this.props;
    const { selectedIndex } = this.state;

    if (!handlePhotoPress) {
      // tslint:disable-next-line:no-console
      console.log('There is no "handlePhotoPress" handler for Gallery photo.');
      return;
    }

    handlePhotoPress(data, selectedIndex);
  };

  render() {
    // @ts-ignore
    const { selectedIndex } = this.state;

    return (
      <InlineGallery
        onPress={this.handlePhotoPress}
        onIndexSelected={this.onIndexSelected}
        selectedIndex={selectedIndex}
        {...this.props}
      />
    );
  }
}

import React from 'react';
import { RangeCalendarElement, RangeCalendarProps } from '@southem/ui';
import { RangeCalendarShowcase } from './range-calendar-showcase.component';
import { calendarShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const RangeCalendarScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: RangeCalendarProps): RangeCalendarElement => (
    <RangeCalendarShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={calendarShowcase}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

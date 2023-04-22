import React from 'react';
import { CalendarElement, CalendarProps } from '@southem/ui';
import { CalendarShowcase } from './calendar-showcase.component';
import { calendarShowcase } from './type';
import { ShowcaseContainer } from '../../../components';

// @ts-ignore
export const CalendarScreen = ({ navigation }): React.ReactElement => {

  const renderItem = (props: CalendarProps): CalendarElement => (
    <CalendarShowcase {...props} />
  );

  return (
    <ShowcaseContainer
      showcase={calendarShowcase}
      renderItem={renderItem}
      onBackPress={navigation.goBack}
    />
  );
};

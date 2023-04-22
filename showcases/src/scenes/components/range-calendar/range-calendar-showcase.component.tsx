import React from 'react';
import { RangeCalendar, RangeCalendarElement, RangeCalendarProps } from '@southem/ui';

export const RangeCalendarShowcase = (props: RangeCalendarProps): RangeCalendarElement => {

  const [range, setRange] = React.useState({});

  return (
    <RangeCalendar
      {...props}
      range={range}
      onSelect={setRange}
    />
  );
};

import React from 'react';
import { RangeCalendar } from '@southem/ui';

export const RangeCalendarSimpleUsageShowcase = () => {

  const [range, setRange] = React.useState({
    startDate: null,
    endDate: null,
  });

  return (
    <RangeCalendar
      range={range}
      onSelect={setRange}
    />
  );
};

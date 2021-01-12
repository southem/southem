import React from 'react';
import { ifTablet } from '../../utils/device';

interface IRenderer {
  Mobile: React.Component;
  Tablet: React.Component;
}

export function Renderer({ Mobile, Tablet }: IRenderer): React.ReactElement {
  // @ts-ignore
  return ifTablet(<Tablet />, <Mobile />);
}

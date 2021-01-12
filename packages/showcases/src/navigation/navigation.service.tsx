import { createRef, RefObject } from 'react';
import { NavigationContainerProps } from '@react-navigation/native';

// @ts-ignore
export const navigationRef: RefObject<NavigationContainerProps> = createRef<NavigationContainerProps>();

// @ts-ignore
export function navigate(name: string|null, params: Object) {
  // @ts-ignore
  navigationRef.current?.navigate(name, params);
}

// @ts-ignore
export function reset(name: string|null, params: Object) {
  // @ts-ignore
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name, params }],
  });
}

// @ts-ignore
export function goBack() {
  // @ts-ignore
  navigationRef.current?.goBack();
}

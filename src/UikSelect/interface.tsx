import * as React from 'react';
export type UikSelectOptionValueType =  string | number;

export interface UikSelectOptionType {
  label?: React.ReactNode;
  value: UikSelectOptionValueType;
}

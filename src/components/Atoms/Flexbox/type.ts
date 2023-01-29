import React from 'react';

export default interface FlexboxProps {
  direction?: string;
  justify?: string;
  alignItem?: string;
  alignContent?: string;
  flexWrap?: string;
  flexFlow?: string;
  gap?: string;
  height?: number;
  margin?: string;
  padding?: string;
  children: React.ReactNode;
}

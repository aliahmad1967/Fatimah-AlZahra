import React from 'react';

export interface SubPoint {
  text: string;
  detail?: string;
}

export interface Branch {
  id: string;
  title: string;
  icon?: React.ReactNode;
  points: SubPoint[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  branches: Branch[];
}

export enum SectionType {
  INTRO = 'INTRO',
  NAMES = 'NAMES',
  STATUS = 'STATUS',
  LIFE = 'LIFE',
  MARRIAGE = 'MARRIAGE',
  AFTERMATH = 'AFTERMATH',
  MARTYRDOM = 'MARTYRDOM'
}
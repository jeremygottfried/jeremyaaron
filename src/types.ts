import { ReactNode, Props } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};

export type LinkProps = {
  to: string;
} & ChildrenProps

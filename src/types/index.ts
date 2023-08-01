import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  containerStyles?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

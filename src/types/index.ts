import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  btnType: 'button' | 'submit';
  containerStyles?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

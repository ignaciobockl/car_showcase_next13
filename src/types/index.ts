import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  btnType: 'button' | 'submit';
  containerStyles?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

// export interface CustomFilterProps {

// }

export interface SearchManufacturerProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

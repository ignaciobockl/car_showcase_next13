import { MouseEventHandler } from 'react';

interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  car: CarProps;
}

export interface CarDetailsProps {
  car: CarProps;
  closeModal: () => void;
  isOpen: boolean;
}

export interface CustomButtonProps {
  btnType: 'button' | 'submit';
  containerStyles?: string;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  textStyles?: string
  title: string;
}

// export interface CustomFilterProps {

// }

export interface SearchManufacturerProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

'use client';

import { CustomButtonProps } from '@/types';

const CustomButton = (props: CustomButtonProps) => {
  const { containerStyles, disabled = false, handleClick, title } = props;

  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={disabled}
      onClick={handleClick}
      type='button'
    >
      <span className='flex-1'>{title}</span>
    </button>
  );
};

export default CustomButton;

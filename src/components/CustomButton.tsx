'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = (props: CustomButtonProps) => {
  const {
    btnType,
    containerStyles,
    disabled = false,
    handleClick,
    rightIcon,
    textStyles,
    title,
  } = props;

  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={disabled}
      onClick={handleClick}
      type={btnType}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            alt='right icon'
            className='object-contain'
            fill
            src={rightIcon}
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;

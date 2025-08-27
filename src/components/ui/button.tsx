'use client'; 

import React from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';
import clsx from 'clsx'; 

type CommonButtonProps = ButtonProps & {
  className?: string;
};

const MyButton: React.FC<CommonButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Button
      className={clsx(
        'rounded-md !px-[20px] !py-[20px]',
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default MyButton;

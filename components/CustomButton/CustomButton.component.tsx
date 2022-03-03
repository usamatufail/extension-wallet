import { ReactElement, ReactNode } from 'react';
import Button from '@mui/material/Button';
import Image from 'next/image';
import {
  buttonStyles,
  disabledStyles,
  ghostStyles,
  primaryStyles,
  secondaryStyles,
} from './CustomButton.styles';
import { css } from '@emotion/react';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  children: ReactNode;
}

export const CustomButton = ({
  type = 'primary',
  disabled,
  children,
}: ButtonProps): ReactElement => {
  return (
    <Button
      css={css`
        ${buttonStyles};
        ${type === 'ghost' && !disabled && ghostStyles};
        ${type === 'primary' && !disabled && primaryStyles};
        ${type === 'secondary' && !disabled && secondaryStyles};
        ${disabled && disabledStyles}
      `}
      disableRipple
    >
      <span className="button__text">{children}</span>
      <div className="button__icon">
        {type === 'ghost' ? (
          <Image src="/svg/next-purple.svg" alt="next icon" layout="fill" />
        ) : (
          <Image src="/svg/next.svg" alt="next icon" layout="fill" />
        )}
      </div>
    </Button>
  );
};

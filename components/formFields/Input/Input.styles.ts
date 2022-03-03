import { css } from '@emotion/react';

export const inputStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .input__label {
    font-size: 14px;
    line-height: 19px;
    color: #6f6e73;
  }
  .input__element {
    background: #fcfcfc;
    border: 1px solid #bebec2;
    box-sizing: border-box;
    border-radius: 8px;
    height: 45px;
    padding: 10px 20px;
    font-family: Manrope;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

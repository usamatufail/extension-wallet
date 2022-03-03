import { css } from '@emotion/react';

export const buttonStyles = css`
  border-radius: 10px;
  padding: 15px 10px;
  min-width: 115px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  .button__text {
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    color: #ffffff;
    text-transform: none;
    min-width: 70px;
    text-align: center;
    font-size: 16px;
  }
  .button__icon {
    position: relative;
    width: 8px;
    height: 13px;
  }
`;

export const primaryStyles = css`
  background: #885fff;
  &:hover {
    background: #5f41b8;
  }
`;

export const secondaryStyles = css`
  background: #414047;
  &:hover {
    background: #2d2c32;
  }
`;

export const ghostStyles = css`
  background: transparent;
  &:hover {
    background: #885fff3d;
  }
  .button__text {
    color: #885fff;
  }
`;

export const disabledStyles = css`
  background: #bebec2;
  cursor: auto;
  &:hover {
    background: #bebec2;
  }
`;

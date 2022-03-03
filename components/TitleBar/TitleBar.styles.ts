import { css } from '@emotion/react';

export const titleBarStyles = css`
  background: #f5f5f5;
  border: 1px solid #dfdfe0;
  box-sizing: border-box;
  border-radius: 0px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  .titlebar__image {
    position: relative;
    height: 22px;
    width: 105px;
  }
  .titlebar__text {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  .titlebar__close {
    &-btn {
      outline: none;
      border: none;
      background: #6f6e732b;
      cursor: pointer;
      padding: 10px;
      border-radius: 50%;
      &-image {
        position: relative;
        height: 10px;
        width: 10px;
      }
    }
  }
`;

export const titleBarCloseStyles = css`
  justify-content: space-between;
  align-items: center;
`;

export const progressBarStyles = css`
  background: #fff;
  .progressbar__inner {
    background: #885fff;
    height: 3px;
    width: 25%;
    transition: all 0.2s ease-in;
  }
  .progressbar__inner-step-2 {
    width: 50%;
  }
  .progressbar__inner-step-3 {
    width: 75%;
  }
  .progressbar__inner-step-4 {
    width: 100%;
  }
`;

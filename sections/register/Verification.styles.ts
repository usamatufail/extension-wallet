import { css } from '@emotion/react';

export const verificationStyles = css`
  padding: 0px 30px;
  .verification {
    &__heading {
      text-align: center;
      margin-top: 30px;
      font-size: 14px;
      color: #414047;
      &-mailphone {
        display: block;
        font-size: 16px;
        color: #587be0;
        margin-top: 10px;
      }
    }

    &__boxes {
      margin-top: 20px;
      .container {
        padding: 16px;
        display: flex;
        justify-content: center;
      }
      .input {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        font-size: 40px;
        text-align: center;
        margin-right: 12px;
        border: 1px solid white;
        text-transform: uppercase;
        background: rgba(0, 0, 0, 0.03);
        border: 1px solid #cfcfcf;
        font-family: Manrope;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #000000;
        &::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        -moz-appearance: textfield;
        &:focus-visible {
          border: 2px solid #885fff;
          outline: none;
        }
      }
    }

    &__button {
      margin-top: 33px;
      display: flex;
      justify-content: center;
    }

    &__separator {
      margin-top: 25px;
      margin-bottom: 25px;
      height: 1px;
      background: #dfdfe0;
    }

    &__didnt {
      font-family: Manrope;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      color: #414047;
    }

    &__different {
      margin-top: 25px;
      font-family: Manrope;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      color: #587be0;
      cursor: pointer;
    }

    &__resend {
      margin-top: 25px;
      font-family: Manrope;
      font-size: 14px;
      line-height: 19px;
      text-align: center;
      color: #587be0;
      cursor: pointer;
    }
  }
`;

import { css } from '@emotion/react';

export const emailPhoneStyles = css`
  padding: 0px 20px;
  .emailphone__buttons {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &-btn {
      border-radius: 10px;
      color: #6f6e73;
      border: none;
      outline: none;
      background: transparent;
      padding: 6px 12px;
      cursor: pointer;
      font-weight: 500;
      transition: color 0.2s ease-in;
      &:hover {
        color: #414047;
      }
    }
    .emailphone__buttons-btn.emailphone__buttons-btn-active {
      border: 1px solid #bebec2;
      color: #414047;
    }
  }

  .emailphone__input {
    margin-top: 26px;
  }
`;

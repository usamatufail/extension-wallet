import { css } from '@emotion/react';

const flexColumnCenter = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const homePage = css`
  background: url('/img/home/bg.png');
  min-height: 100vh;
  ${flexColumnCenter}
  justify-content: space-between;
  color: #fff;
  .homepage__title {
    &-main {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 10px;
      &-img {
        height: 30px;
        width: 30px;
        position: relative;
      }
    }
  }
  .homepage__footer {
    margin-bottom: 34px;
    ${flexColumnCenter}
    gap: 20px;
    &-image {
      position: relative;
      width: 114px;
      height: 30px;
    }
  }
`;

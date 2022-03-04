import { ReactElement } from 'react';
import { css } from '@emotion/react';
import {
  progressBarStyles,
  titleBarStyles,
  titleBarCloseStyles,
} from './TitleBar.styles';
import Image from 'next/image';

interface TitleBarProps {
  close?: boolean;
  text?: string;
  step?: number;
}

export const TitleBar = ({
  close = false,
  text = '',
  step,
}: TitleBarProps): ReactElement => {
  return (
    <>
      <div
        css={css`
          ${titleBarStyles}
          ${close && titleBarCloseStyles}
        `}
      >
        {close && <div></div>}
        <div>
          {close ? (
            <div className="titlebar__text">{text}</div>
          ) : (
            <div className="titlebar__image">
              <Image src="/img/homepage.png" alt="home page" layout="fill" />
            </div>
          )}
        </div>
        {close && (
          <div className="titlebar__close">
            <button className="titlebar__close-btn">
              <div className="titlebar__close-btn-image">
                <Image src="/img/cross.png" alt="home page" layout="fill" />
              </div>
            </button>
          </div>
        )}
      </div>
      {close && (
        <div
          css={css`
            ${progressBarStyles}
          `}
        >
          <div
            className={`progressbar__inner progressbar__inner-step-${step}`}
          ></div>
        </div>
      )}
    </>
  );
};

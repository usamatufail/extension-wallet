import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import { homePage } from 'styles';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={css`
          ${homePage}
        `}
      >
        <div className="homepage__placeholder"></div>
        <div className="homepage__title">
          <div className="homepage__title-main">
            <div className="homepage__title-main-img">
              <Image src="/svg/home.svg" alt="home" layout="fill" />
            </div>
            <div className="homepage__title-main-text">
              <h1>HomePage</h1>
            </div>
          </div>
          <div className="homepage__title-desc">
            <p>a web3 gateway to hidden experiences</p>
          </div>
        </div>
        <div className="homepage__footer">
          <div className="homepage__footer-text">powered by</div>
          <div className="homepage__footer-image">
            <Image
              src="/img/home/near-logo.png"
              alt="near-logo"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

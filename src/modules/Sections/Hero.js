//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Telegram } from '../Assets/Telegram';
import { Twitter } from '../Assets/Twitter';

const Hero = () => (
  <div className="InnerContainer">
    <div className="Hero-PrimaryContainer">
      <div className="HeroTxt">
        <p>MEME VS MEME. WHO WILL WIN?</p>
        <h1>Steve</h1>
        <p>Seagull against Frog, Steve against Pepe.</p>
        <p>A battle to the last "Meme" only one will emerge victorious.</p>
        <div className="HeroBtns">
          <div>
            <Link
              href="https://app.uniswap.org/#/swap?outputCurrency=0x54DeBE126da16A8fCAa67285d6830C3A7C6752fd"
              target="_blank"
            >
              {' '}
              BUY NOW{' '}
            </Link>
            <Link
              href="https://etherscan.io/token/0x54debe126da16a8fcaa67285d6830c3a7c6752fd#balances"
              target="_blank"
            >
              {' '}
              ETH SCAN{' '}
            </Link>
          </div>
          <div>
            <Link
              className="circleBtn telegram"
              href="https://t.me/SteveERC20/"
              target="_blank"
            >
              {' '}
              <Telegram />{' '}
            </Link>
            <Link
              className="circleBtn twitter"
              href="https://twitter.com/SteveSeagullEt"
              target="_blank"
            >
              {' '}
              <Twitter />{' '}
            </Link>
          </div>
        </div>
      </div>

      <div className="HeroImg">
        <Image
          src="./img/Steve-hero3.png"
          width={624}
          height={469}
          alt="Steve"
        />
      </div>
    </div>
  </div>
);

export { Hero };

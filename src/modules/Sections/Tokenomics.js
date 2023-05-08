//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Tokenomics = () => (
  <div id="Tokenomics" className="InnerContainer">
    <div className="Tokenomics-PrimaryContainer">
      <h2>Tokenomics</h2>
      <div className="TokenAddress">
        <h3>Token Address</h3>
        <p>0x54DeBE126da16A8fCAa67285d6830C3A7C6752fd</p>
      </div>

      <div className="TokenomicSplit">
        <div className="TokenSupplyBlock">
          <h3>Token Supply</h3>
          <p>420,690,000,000,000</p>
          <div className="InnerBlock">
            <p>No tax. 0% buy and sell fees.</p>
            <p>We like to play on equal terms.</p>
            <p>Liquidity is completely locked and contract is renounced.</p>
            <p>100% of the supply is in LP</p>
          </div>
        </div>

        <div className="TokenSupplyHeros">
          <div className="DisplayBlocks">
            <div className="InnerBlock">
              <h4>Liquidity Pool</h4>
              <p>100%</p>
            </div>
            <div className="InnerBlock">
              <h4>Future Listing</h4>
              <p>TBD</p>
            </div>
            <div className="InnerBlock">
              <h4>Starting Marketcap</h4>
              <p>5300$</p>
            </div>
          </div>
          <div className="TokenSupplyImg">
            <Image
              src="./img/angry-steve.png"
              width={550}
              height={589}
              alt="Steve"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Tokenomics };

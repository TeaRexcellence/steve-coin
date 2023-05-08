//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Divider } from '../Assets/Divider';
import Image from 'next/image';

const Roadmap = () => (
  <div id="Roadmap" className="Roadmap-PrimaryContainer">
    <Divider />
    <div className="DividerSection">
      <div className="InnerContainer">
        <h2>Roadmap</h2>

        <div className="RoadMapHero">
          <div className="RoadMapHeroImg">
            <Image
              src="./img/focused-steve.png"
              width={500}
              height={508}
              alt="Steve"
            />
          </div>
          <div className="RoadMapHeroTxt">
            <p>Phase 1: Meme</p>
            <p>Phase 2: Vibe and HODL</p>
            <p>Phase 3: Generational wealth</p>
          </div>
        </div>

        <div className="Phases">
          <div className="Phase1 Phase">
            <Image
              src="./img/phase1.png"
              width={680}
              height={440}
              alt="Steve"
            />
            <h3>Phase 1</h3>
            <ul>
              <li>Launch</li>
              <li>CoinGecko/Coinmarketcap Listings</li>
              <li>1,000+ Holders</li>
              <li>Get $Steve Trending on twitter with our memetic power</li>
            </ul>
          </div>

          <div className="Phase2 Phase">
            <Image
              src="./img/phase2.png"
              width={680}
              height={440}
              alt="Steve"
            />
            <h3>Phase 2</h3>
            <ul>
              <li>Community Whitepaper</li>
              <li>Website redesign</li>
              <li>Community Partnerships</li>
              <li>CEX Listings 10,000+holders</li>
            </ul>
          </div>

          <div className="Phase3 Phase">
            <Image
              src="./img/phase3.png"
              width={680}
              height={440}
              alt="Steve"
            />
            <h3>Phase 3</h3>
            <ul>
              <li>Community Marketing Wallet</li>
              <li>T1 Exchange Listings 100,000+ holders</li>
              <li>Steve vs Meme coin comics</li>
              <li>Flip Bitcoin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Divider />
  </div>
);

export { Roadmap };

//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import Image from 'next/image';
import { Hamburger } from '../Assets/Hamburger';


const SiteHeader = () => {
  const [showMM, setShowMM] = useState(false);
  const toggleMM = () => setShowMM(!showMM);

  return (
    <div className="InnerContainer">
    <header>
      <div className="nav-assets">
        <Image src="./img/logo.png" width={210} height={129} alt="Steve" />
        <div className="HamburgerContainer" onClick={toggleMM}>
          <Hamburger/>
        </div>
      </div>

      <div className='desktop-nav-container'>
        <DesktopNav />
      </div>

      <div className='mobile-nav-container'>
      {showMM && <MobileNav />}
      </div>

    </header>
    </div>
  );
};

export { SiteHeader };

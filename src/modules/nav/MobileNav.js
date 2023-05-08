//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


const MobileNav = () => (
<nav className="mobile-nav">
  <ul>
    <li>
      <Link href="/">
          Home
      </Link>
    </li>
    <li>
      <Link href="#About">
        About 
      </Link>
    </li>
    <li>
      <Link href="#Tokenomics">
        Tokenomics
      </Link>
    </li>
    <li>
      <Link href="#Roadmap">
        Roadmap
      </Link>
    </li>
    <li>
      <Link href="#HowToBuy">
          How To Buy
      </Link>
    </li>
    <li>
      <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0x3f96fd489468e1527f653676441c8e3968f5b40e" target="_blank">
          Chart 
      </Link>
    </li>
  </ul>
  </nav>
);

export { MobileNav };

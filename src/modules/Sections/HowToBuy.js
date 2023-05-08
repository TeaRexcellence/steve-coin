//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';


const HowToBuy = () => (
<div id="HowToBuy" className="InnerContainer">
  <div className="HowToBuy-PrimaryContainer">
  <h2>How To Buy</h2>
  <div className="HTB-Blocks">
  <div className="HTB-Block">
      <h3>1. Create a Wallet</h3>
      <p>Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.</p>
    </div>
    <div className="HTB-Block">
      <h3>2. Get Some ETH</h3>
      <p>Have ETH in your wallet to switch to STEVE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet. </p>
    </div>
    <div className="HTB-Block">
      <h3>3. Go to Uniswap </h3>
      <p>Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the STEVE token address into Uniswap, select Steve, and confirm. When Metamask prompts you for a wallet signature, sign.</p>
    </div>
    <div className="HTB-Block">
      <h3>4. Switch ETH for STEVE </h3>
      <p>Switch ETH for STEVE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.</p>
    </div>
  </div>
  </div>
</div>
);

export { HowToBuy };

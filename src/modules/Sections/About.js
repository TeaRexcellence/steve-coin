//@ts-check

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const About = () => (
  <div id="About" className="InnerContainer">
    <div className="About-PrimaryContainer">
      <div className="AboutImg">
        <Image
          src="/img/Steve-hero-1.png"
          width={400}
          height={400}
          alt="Steve"
        />
      </div>

      <div className="AboutTxt">
        <h2>About</h2>
        <p>
          After Pepe’s launch, 100 tokens inspired by it were born in a second,
          no one who had a bit of originality in creating something different or
          the courage to say “We are the token that will kill Pepe”, well ! We
          have the courage.
        </p>
        <p>
          Seagull versus Frog, there’s only one possible ending. The seagull
          will triumph.
        </p>
      </div>
    </div>
  </div>
);

export { About };

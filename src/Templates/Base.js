//@ts-check

import React, { ReactNode } from 'react';
import { SiteHeader } from '../modules/nav/SiteHeader';
import { Footer } from '../modules/footer/Footer';


const Base = (props) => (
  <>

  {props.meta}

      <SiteHeader/>

      <div className="MainContent">
        {props.children}
      </div>

      <Footer/>
  </>

);

export { Base };
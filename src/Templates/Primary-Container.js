//@ts-check

import React, { ReactNode } from 'react';
import { Base } from './Base';

const PrimaryContainer = (props) => (

  <div className="PrimaryContainer">
      <Base meta={props.meta}>
        <>
          {props.children}
        </>
      </Base>
  </div>
);

export { PrimaryContainer };
import React, { Fragment } from 'react';

import Hits from './Hits';
import Catalog from './Catalog';

export default function MainPage() {
  return (
    <Fragment>
      <Hits />
      <Catalog />
    </Fragment>
  );
}

import React from 'react';

import Hits from './Hits';
import Catalog from './Catalog';

export default function MainPage() {
  return (
    <>
      <Hits />
      <Catalog mainPage />
    </>
  );
}

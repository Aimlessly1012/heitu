import React from 'react';

import { Store } from 'heitu/charts/store';
import LineChart from './lineChart';

const Index = (props: any) => {
  console.log(props, 'props.');
  return (
    <Store.Provider initialState={{ option: props.option }}>
      <LineChart {...props} />
    </Store.Provider>
  );
};

export default Index;

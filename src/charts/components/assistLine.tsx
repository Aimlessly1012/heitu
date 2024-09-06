import { Line } from 'heitu/canvas';
import React from 'react';
import { Store } from '../store';

const AssistLine = (option: any) => {
  const store = Store.useContainer();
  const { assistLine } = store;
  console.log(assistLine, 'assistLine');
  console.log(assistLine.ref.current, 'initialState');
  return (
    <div>
     
    </div>
  );
};

export default AssistLine;

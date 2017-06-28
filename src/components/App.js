import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Filter from './Filter';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Filter} />
      </div>
    </BrowserRouter>
  );
};

export default App;

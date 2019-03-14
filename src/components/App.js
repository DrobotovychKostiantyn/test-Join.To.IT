import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CategoriesPage from './Pages/CategoriesPage/CategoriesContainer';
import PostPage from './Pages/PostsPage/PostsContainer';

const App = () => (
  <>
    <Switch>
      <Route path="/posts/:cetegory" component={PostPage} />
      {/* <Route path="/quotes" component={QuotesPage} /> */}
      <Route component={CategoriesPage} />
    </Switch>
  </>
);

export default App;

import{
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
}from 'react-router-dom'


import SearchPage from './components/search-page'
import MainLayout from './layouts/main-layout'
import PageNotFound from './components/page-not-found'
import HistoryPage from './components/history-page'

function App() {
  return (<Router>
    <MainLayout>
      <Switch>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/history">
          <HistoryPage/>
        </Route>
        <Route exact path="/">
          <Redirect to="/search"/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
      </MainLayout>
  </Router>
      
  );
}

export default App;

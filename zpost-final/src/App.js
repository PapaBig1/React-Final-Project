import './App.css';
import { Box } from '@mui/material';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Listing from './pages/Listing';
import Listings from './pages/Listings';
import Admin from './admin/admin';
import {Route, Switch} from 'react-router-dom';
import Drawer from './components/Drawer';
import ArticleUpsert from './admin/ArticleUpsert';

const App = () => {

  return (
      <div>
        <Drawer />
        <Box component="main" sx={{pt: 8, pb: 6}} >
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact from="/listings" render={props => <Listings {...props} />} />          
            <Route exact from="/admin" render={props => <Admin {...props} />} /> 
            <Route exact from="/listing/create" render={props => <ArticleUpsert {...props} />} />
            <Route exact from="/listing/view/:id" render={props => <Listing {...props} />} />
            <Route exact from="/listing/edit/:id" render={props => <ArticleUpsert {...props} />} />
            <Route exact from="/listing/delete/:id" render={props => <ArticleUpsert {...props} />} />
            <Route path="*"><NotFound/></Route>
          </Switch>
        </Box>
    </div>
  );
}

export default App;

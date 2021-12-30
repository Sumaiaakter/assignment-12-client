
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

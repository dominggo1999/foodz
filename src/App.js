import React from 'react';
import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import Showcase from './pages/Showcase';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App = (props) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />

        <Route
          exact
          path="/about"
          component={About}
        />
        <Route
          exact
          path="/menu"
          component={Menu}
        />
        <Route
          exact
          path="/gallery"
          component={Gallery}
        />
        <Route
          exact
          path="/blog"
          component={Blog}
        />
        <Route
          exact
          path="/contact"
          component={Contact}
        />
        <Route
          exact
          path="/showcase"
          component={Showcase}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

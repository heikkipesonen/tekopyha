require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import React from 'react';
import Header from './Header';
import Itemlist from './item/Itemlist';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
          <Header></Header>
          <Itemlist></Itemlist>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

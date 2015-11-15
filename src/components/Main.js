require('normalize.css');
require('styles/App.scss');
require('ionicons/scss/ionicons.scss');

import React from 'react';
import View from './View';
import Header from './Header';
import Itemlist from './item/Itemlist';

class AppComponent extends React.Component {
  render() {
    return (
      <View className="scroll-y" image="images/header.jpg">
        <Header title="Pelasta maailma" text="Pelasta koko maailma yhdestä paikasta"></Header>
        <Itemlist></Itemlist>
      </View>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

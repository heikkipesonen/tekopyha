import React from 'react';
import ImageContainer from './utils/ImageContainer';

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <ImageContainer className="header-image" src="images/header.jpg"></ImageContainer>
      </div>
    )
  }
}

export default Header;

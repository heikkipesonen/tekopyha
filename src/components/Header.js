import React from 'react';
import ImageContainer from './utils/ImageContainer';

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        
        <div className="header-text-container">
          <h2 className="header-title">{this.props.title}</h2>
          <p className="header-text">{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Header;

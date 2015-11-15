import React from 'react';

class Item extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log(this.props.src);
    return (
      <div className="item">
        <div className="item-title-wrapper">
          <h3 className="item-title">{this.props.src.title}</h3>
          <p className="item-description">{this.props.src.description}</p>
        </div>
        <div className="item-content">
          <div className="item-status"></div>
          <button className="button button-action">{this.props.src.action}</button>
        </div>
        <div className="item-share"></div>
      </div>
    );
  }
}

export default Item;

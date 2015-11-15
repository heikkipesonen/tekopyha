import React from 'react';
import Barchart from './Barchart';

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
          <div className="item-status">
            <Barchart value={this.props.src.votes} total={this.props.src.votes_required} label={this.props.src.votes}></Barchart>
          </div>
          <div className="item-actions">
            <button className="button button-action">{this.props.src.action}</button>
          </div>
        </div>
        <div className="item-share">
          <i className="icon ion-social-facebook item-button-share"></i>
          <i className="icon ion-social-twitter item-button-share"></i>
        </div>
      </div>
    );
  }
}

export default Item;

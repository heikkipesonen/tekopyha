import React from 'react';
import Barchart from './Barchart';

class Item extends React.Component {
  constructor (props) {
    super(props);
  }

  support = () => {
    let item = this.props.src;
  }

  componentWillReceiveProps () {
    console.log('PERDE');
  }

  render () {
    let classNames = this.props.className + ' item';
    if (this.props.src && (this.props.src.votes > this.props.src.votes_required)){
      classNames += ' item-complete';
    }

    return (
      <div className={classNames}>
        <div className="item-title-wrapper">
          <h3 className="item-title">{this.props.src.title}</h3>
          <p className="item-description">{this.props.src.description}</p>
        </div>
        <div className="item-content">
          <div className="item-status">
            <Barchart value={this.props.src.votes} total={this.props.src.votes_required} label={this.props.src.votes}></Barchart>
          </div>
          <div className="item-actions">
            <button className="button button-action" onClick={this.support}><i className="icon ion-ios-heart"></i>{this.props.src.action}</button>
          </div>
        </div>
        <div className="item-share">
          <p className="share-text">Kerro urotöistäsi myös muille, ettei panoksesi valu hukkaan!</p>
          <i className="icon ion-social-facebook item-button-share"></i>
          <i className="icon ion-social-twitter item-button-share"></i>
        </div>
      </div>
    );
  }
}

export default Item;

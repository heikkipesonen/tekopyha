import React from 'react';

class Item extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let classNames = this.props.className ? this.props.className + ' ' : '' + 'item';
    if (this.props.src && (this.props.src.votes > this.props.src.votes_required)){
      classNames += ' item-complete';
    }

    return (
      <div className={classNames}>
        <div className="item-title-wrapper">
          <h3 className="item-title">{this.props.title}</h3>
          <p className="item-description">{this.props.description}</p>
          <div className="item-title-controls">
            <i className="icon ion-ios-more"></i>
          </div>
        </div>
        <div className="item-content">
          <div className="item-status">
            <h2 className="item-status-label">{this.props.value}</h2>
          </div>
          <div className="item-actions">
            <button className="button large button-action" onClick={ ()=> this.props.vote(this.props.id)}><i className="icon ion-ios-heart"></i>{this.props.action}</button>
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

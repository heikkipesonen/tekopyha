import React from 'react';
import Item from './Item'
import _ from 'lodash';

class Itemlist extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentDidMount () {
    this.load();
  }

  vote = (id) => {
    console.log(id);
    let item = _.find(this.state.items, {id: id});
    item.votes++;
    console.log(item.votes);
  }

  load () {
    fetch('data.json').then((response)=>{
      response.json().then((data) => {
        this.setState({
          items: data
        });
      });
    });
  }

  render () {
    return (
      <div className="item-list-wrapper">
        <div className="item-list">
          {this.state.items.map((item, index) => {
            return <Item
              id={item.id}
              title={item.title}
              description={item.description}
              value={item.votes}
              action={item.action}
              vote={this.vote}
              key={index}></Item>
          })}
        </div>
      </div>
    )
  }
}

export default Itemlist;

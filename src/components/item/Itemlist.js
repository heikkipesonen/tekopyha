import React from 'react';
import Item from './Item'

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
      <div className="item-list">
      {this.state.items.map((item, index) => {
        return <Item src={item} key={index}></Item>
      })}
      </div>
    )
  }
}

export default Itemlist;

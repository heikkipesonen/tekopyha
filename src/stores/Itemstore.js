import {EventEmitter} from 'events';
import _ from 'lodash';

class Itemstore extends EventEmitter {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;

    this.items = [];
  }

  handleReceiveItems (payload) {
    this.items = payload;
    this.emit('change');
  }

  updateItem (payload) {
    let item = _.find(this.items, {id: item.id});
    if (item) {
      _.assign(item, payload);
      this.emit('change');
    }
  }
}

Itemstore.handlers = {
  'RECEIVE_ITEMS' : 'handleReceiveItems',
  'UPDATE_ITEM' : 'updateItem'
}

export default Itemstore;

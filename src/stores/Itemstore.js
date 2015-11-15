import {EventEmitter} from 'events';

class Itemstore extends EventEmitter {
  constructor (dispatcher) {
    super(dispatcher);
    this.dispatcher = dispatcher;

    this.items = [];
  }
}

export default Itemstore;

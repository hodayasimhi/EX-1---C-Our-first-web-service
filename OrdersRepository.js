const { EventEmitter } = require('events');
const OrderJson = require('./data/orders.json');
const moment = require('moment');

class OrdersRepository extends EventEmitter {
    constructor() {
      super();
      this._orders =OrderJson;
    }

    // Fire event

    getOrder(id)
    {
        this.emit("singleOrder",this._orders[id-1]);
        return _orders[id-1];
    }

    getOrders()
    {
        this.emit("allOrders",this._orders);
        return _orders;
    }
    
    newOrder(dataOrder)
    {
        this._orders.push(dataOrder)
        this.emit("orderNew",this._orders[this._orders.length-1]);
        return this._orders[this._orders.length-1];
    }

}

  // Catch events
  const OrdersRepo = (new OrdersRepository())
  .on('getOrder',data => console.log(`Get single order: ${data.order}`))
  .on('getOrders',data => console.log(`Get orders: ${data.order}`))
  .on('newOrder',data => console.log(`create Order: ${JSON.stringify(data)}`));

  module.exports = OrdersRepo;


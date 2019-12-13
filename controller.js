const url = require('url');
const { getSingleOrder,allOrders,getlogs } = require('./handlers');

module.exports = (req, res) => {
    console.log(`Request ${req.method} came from ${req.url}`);

    const urlObject = url.parse(req.url, true, false);
    req.urlObject = urlObject;

    switch (req.method) {
        case 'GET':
            if (urlObject.path.startsWith('/getSingleOrder')) {
                getSingleOrder(req, res);
            }
            if (urlObject.path.startsWith('/allOrders')&&urlObject.query.admin=='admin') {
                handler.allOrders(req, res);
              }
            if (urlObject.path.startsWith('/getlogs')&&urlObject.query.admin=='admin') {
                handler.getlogs(req, res);
              }
              break;
        default: 
            console.log("Please enter an address again")
            res.writeHeader(404);
            res.end("Please enter an address again");
    }
};
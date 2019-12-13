const orders = require('./OrdersRepository');
const moment = require('moment');

let logs=[]; //Logs

const getSingleOrder = (req, res) => {
    const { id } = req.urlObject.query;
  
    if (!Number.isNaN(id)) {
      const order = orders.getOrder(id);
  
      if (order){
        res.writeHeader(200);
        res.end(JSON.stringify(id));
       }  
      else {
        // log and return 'order not found' error
        logs.push("song not found");
        console.log("song not found");
      }
    }else {
        // log and return 'id is isNaN' error
        logs.push("id is isNaN");
        console.log("id is isNaN");
    }}



const allOrders = (req, res) => {
    const { allOrders } = req.urlObject.query;
      
    if (allOrders) {
        res.writeHeader(200);
        res.end(JSON.stringify(allOrders));
        }
        else {
            // log and return 'id is isNaN' error
            res.writeHeader(404);
            res.end();
        }};

const orderNew = (req, res) => {
    let body ='';
    req.on('data', chunk =>{
        body += chunk.toString();
    })
    req.on('end', ()=>{
        const DataItem =JSON.parse(body);
        const dataNew =JSON.parse(`${moment().format("DD-MM-YYYY")}`)
        DataItem.push(dataNew);
        orders.dataNew(DataItem);
        res.writeHeader(200);
        res.end();
    });

const getlogs=(req,res)=>{
    res.writeHeader(200);
    for(let i = 0; i < this.logs.length; ++i)
        console.log(this.logs[i]); 
    res.end(JSON.stringify(logs));
      };
              
   };      
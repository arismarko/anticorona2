
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = router;

router.get('/api/stores', (req, res) => {
    prisma.store.findMany({ where: 
       { 
            Item: {
               some: 
                    {item: req.query.missing} 
            } 
        }
    }).then(results => {
        res.json(results);
    })

    
});

router.get('/api/stores/:id', (req, res) => {
//   res.json(data.stores.find(s => s.id === req.params.id));
});

router.post('/api/addstores', async (req, res) => {

  const { body } = req;


  const store =  await prisma.store.create({ data: {
    storename: body.storename,
    location: body.location,
    coordinates: body.coordinates,
    date: new Date(),
    Item: {
      create: body.items,
    },
  }});

  res.json(store);

})
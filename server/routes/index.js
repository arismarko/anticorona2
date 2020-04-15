
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = router;

router.get('/api/stores', (req, res) => {

    prisma.store.findMany().then(results => {
        res.json(results);
    })

    
});

router.get('/api/stores/:id', (req, res) => {
//   res.json(data.stores.find(s => s.id === req.params.id));
});

router.get('/api/addstores', async (req, res) => {
   const store =  await prisma.store.create({ data: {
        storename: 'tesco',
        location: 'Camden',
        coordinates: '23444,34444',
        date: new Date(),
        Item: {
          create: [
            { item: 'toiletroll', number: '20' },
            { item: 'masks', number: '20' },
          ],
        },
      }});
    res.json(store);
})
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// POST /api/user
// Required fields in body: name, email
export default async (req, res) => {
    const {
        query: {missing },
        query: {date},
        method,
    } = req

    switch (method) {
        case 'GET':
            // Get data from your database
               await prisma.store.findMany({ where: 
                    { 
                        date: new Date(date),
                        Item: {
                            some: 
                                {item: missing} 
                        } 
                    }
                }).then(results => {
                    console.log(results);
                    res.status(200).json(results)
                })

            break
        case 'POST':
            // Update or create data in your database
            const { body } = req;

            var today = new Date();
            var todayonlydate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            const store =  await prisma.store.create({ data: {
                storename: body.storename,
                location: body.location,
                coordinates: body.coordinates,
                date: new Date(todayonlydate),
                Item: {
                create: body.items,
                },
            }});
    
            res.status(200).json(store);
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
      }
}

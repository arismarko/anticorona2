import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
  if (req.method === 'GET') {
    const { body } = req;
    const store = await prisma.store.create({ data: {
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
      } });
    res.json(store);
  }
}
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

// next app handler
const app = next({ dev });

// next routing handler
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/:missing', (req, res) => {
      const { missing } = req.params;

      app.render(req, res, '/', { ...req.query, missing });
    });

    server.get('*', (req, res) => handle(req, res));

    server.post('*', (req, res) => {return handle(req, res)})

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
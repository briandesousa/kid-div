import express from 'express';
import path from 'path';

const server = express();
server.use(express.static(path.join(__dirname, '../../dist')));

// serve API
server.get('/api', (req, res) => {
  res.send('Future API');
});

server.listen(
  3000,
  () => console.log('Kid Dev server started, listening on port 3000')
);

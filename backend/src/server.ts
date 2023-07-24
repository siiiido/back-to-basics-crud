import app from '../app';
import mongoose from 'mongoose';

const port = 5000;

mongoose
  .connect()
  .then(() => {
    console.log('mongoose connected');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.search(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const albumsRouter = require('./routes/albums');
const imagesRouter = require('./routes/images');
// const albumImageRouter = require('./routes/album_image');

app.use('/albums', albumsRouter);
app.use('/images', imagesRouter);
// app.use('/album_image', albumImageRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


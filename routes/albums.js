const router = require('express').Router();
const { db } = require('../models/album.model');
let Album = require('../models/album.model');
let Image = require('../models/image.model');
let AlbumImage = require('../models/album_image.model');

router.route('/').get((req, res) => {
  Album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').get((req, res) => {
  const albumId = req.params.id;

  Image
  .find({$match: {album_id: albumId}})
  .then(album_images => res.json(album_images))
  .catch(err => res.status(400).json(err));

  // .then(res => res.send(result)).catch(err => console.log(err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newAlbum = new Album({name});

  newAlbum.save()
    .then(() => res.json("Album added!"))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
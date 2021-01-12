const router = require('express').Router();
let Album = require('../models/album.model');
let Image = require('../models/image.model');

router.route('/').get((req, res) => {
  Album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(400).json(err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newAlbum = new Album({name});

  newAlbum.save()
    .then(() => res.json("Album added!"))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').get((req, res) => {
  Album.findById(req.params.id)
    .then(all => res.json(all))
    .catch(err => res.status(400).json(err));
});

router.route('/:id/images').get((req, res) => {
    Image.find({ album_id: req.params.id })
    .then(all => res.json(all))
    .catch(err => res.status(400).json(err));
});


router.route('/:id').delete((req, res) => {
  Album.findByIdAndDelete(req.params.id)
  .then(() => res.json('Album Deleted'))
  .catch(err => res.status(400).json(err));
});

router.route('/update/:id').post((req, res) => {
  Album.findById(req.params.id)
  .then(album => {
    album.name = req.body.name;

    album.save()
      .then(() => res.json('Album updated!'))
      .catch(err => res.status(400).json(err))
  })
  .catch(err => res.status(400).json(err));
});



module.exports = router;
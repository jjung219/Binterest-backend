const router = require('express').Router();
let Image = require('../models/image.model');

router.route('/').get((req, res) => {
  Image.find()
    .then(images => res.json(images))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').get((req, res) => {
  Image.findById(req.params.id)
    .then(images => res.json(images))
    .catch(err => res.status(400).json(err));
});

router.route('/:id').delete((req, res) => {
  Image.findByIdAndDelete(req.params.id)
    .then(() => res.json('Image Removed'))
    .catch(err => res.status(400).json(err));
});

router.route('/add').post((req, res) => {
  const imageURL = req.body.url;
  const description = req.body.description;
  const album_id = req.body.album_id;

  const newImage = new Image({
    album_id,
    description,
    url: imageURL
  })

  newImage.save()
  .then(()=> res.json('Image added to Album!'))
  .catch(err => res.status(400).json(err));
})

module.exports = router;
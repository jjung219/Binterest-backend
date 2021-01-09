const router = require('express').Router();
let AlbumImage = require('../models/album_image.model');

router.route('/').get((req, res) => {
  AlbumImage.find()
    .then(bins => res.json(bins))
    .catch(err => res.status(400).json(err));
});

router.route('/add').post((req, res) => {
  const album_id = req.body.album_id;
  const image_id = req.body.image_id;

  const newAlbumImage = new AlbumImage({
    album_id,
    image_id
  }) 
  
  newAlbumImage.save()
  .then(()=> res.json('Image id and Album id added to AlbumImage!'))
  .catch(err => res.status(400).json(err));
})



module.exports = router;
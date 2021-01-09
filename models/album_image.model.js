const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumImageSchema = new Schema({
  album_id: {
    type: String,
    required: true
  },
  image_id: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

const AlbumImage = mongoose.model('albumImage', albumImageSchema);

module.exports = AlbumImage;
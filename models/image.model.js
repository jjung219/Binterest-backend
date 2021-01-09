const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  album_id: { type: String, required: true },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  url: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const Image = mongoose.model('image', imageSchema);

module.exports = Image;
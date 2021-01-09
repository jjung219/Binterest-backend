const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true,
})

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

//album_images
//Album.aggregate([{
//   $lookup: {
//     from: 'images', => localhost://3002/images
//     localField: '',
//     foreignField: ,
//     as:
//   }  
// }])
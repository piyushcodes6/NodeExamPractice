const videoSchema = require('../models/videos')
const getVideoListing = (req, res) => {
  videoSchema.find({}, (err, video) => {
    if (err) {
      res.status(400).json(err)
    } else {
      res.status(400).json(video)
    }
  })
}

module.exports = { getVideoListing }

const mongoose = require('mongoose');

const planetsScheama = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Planet', planetsScheama);

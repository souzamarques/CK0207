const mongoose = require('../db/conn')
const { Schema } = mongoose

const Pet = mongoose.model(
  'Pet',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    weight: {
      type: Number,
      required: true,
    },
    race: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    available: {
      type: Boolean,
    },
    wormed: {
      type: Boolean,
    },
    sex: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    user: Object,
    adopter: Object,
  }, {timestamps: true}),
)

module.exports = Pet

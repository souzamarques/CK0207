const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('')
  console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose

const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://getpetapp:UtGatNKySifZd1PH@cluster0.vj3f3.mongodb.net/?retryWrites=true&w=majority')
  console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose

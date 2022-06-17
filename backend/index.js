const express = require('express')
const mongoose = require('mongoose')
const app = express()

// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


// rotas da API
const userRoutes = require('./routes/userRoutes')

app.use('/user', userRoutes)
app.use('/pets', petRoutes)

// endpoint
app.get('/', (req, res) => {

    res.json({ message: 'Test' })

})

// porta
const DB_USER = 'admin'
const DB_PSW = '1234'

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PSW}@apicluster.ix80p.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("MongoDB conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))

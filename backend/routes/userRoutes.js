const router = require('express').Router()
const User = require('../models/User')

// Create
router.post('/', async (req, res) => {

    const { name, email, password, phone } = req.body

    if (!name) {
        res.status(422).json({ error: 'O nome é obrigatório' })
        return
    }
    if (!email) {
        res.status(422).json({ error: 'O email é obrigatório' })
        return
    }
    if (!password) {
        res.status(422).json({ error: 'A senha é obrigatória' })
        return
    }
    if (!phone) {
        res.status(422).json({ error: 'O telefone é obrigatório' })
        return
    }

    const user = {
        name,
        email,
        password,
        phone
    }

    try {

        // criando dados
        await User.create(user)

        res.status(201).json({ message: 'Usuário inserido no sistema com sucesso' })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Read
router.get('/', async (req, res) => {
    try {

        const user = await User.find()

        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        const user = await User.findOne({ _id: id })

        if (!user) {
            res.status(422).json({ error: 'Usuário não encontrado' })
            return
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Update
router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { name, email, password, phone } = req.body

    const user = {
        name,
        email,
        password,
        phone
    }

    try {
        const updateUser = await User.updateOne({ _id: id }, user)

        if(updateUser.matchedCount === 0) {
            res.status(422).json({ error: 'Usuário não encontrado' })
            return
        }

        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({ error: error })
    }

})

// delete
router.delete('/:id', async (req, res) => {
    
    const id = req.params.id

    const user = await User.findOne({ _id: id })

    if (!user) {
        res.status(422).json({ error: 'Usuário não encontrado' })
        return
    }

    try {
        await User.deleteOne({ _id: id })

        res.status(200).json({ message: 'Usuário removido com sucesso' })
    } catch(error) {
        res.status(500).json({ error: error })
    }

})

module.exports = router

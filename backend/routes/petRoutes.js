const Pet = require('../models/Pet')

const router = require('express').Router()

router.post('/cadastrar-pet', async (req, res) => {
    const { nome, raca, idade, peso, porte, isVermifugado, observacoes } = req.body

    if(!nome || !raca || !idade || !peso || !porte || !isVermifugado) {
        res.status(422).json({ error: 'Preencha os campos obrigatórios!'})
        return
    }

    const pet = {
        nome,
        raca,
        idade,
        peso,
        porte,
        isVermifugado,
        observacoes
    }

    try{    
        await Pet.create(pet)

        res.status(201).json({ message: 'Pet inserido com sucesso!' })
    }catch(error) {
        res.status(500).json({ error: error })
    }
} )

router.get('/', async (req, res) => {

    try{    
        const pets = await Pet.find()

        res.status(200).json({pets})
    }catch(error) {
        res.status(500).json({ error: error })
    }
} )

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try{    
        const pet = await Pet.findOne({ _id: id })
        if(!pet) {
            res.status(422).json({message: 'Pet não encontrado!'})
            return
        }

        res.status(200).json({pet})
    }catch(error) {
        res.status(500).json({ error: error })
    }
} )

router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { nome, raca, idade, peso, porte, isVermifugado, observacoes } = req.body
    const pet = {
        nome,
        raca,
        idade,
        peso,
        porte,
        isVermifugado,
        observacoes
    }

    try{    
        const updatedPet = await Pet.updateOne({ _id: id }, pet)

        if(updatedPet.matchedCount === 0){
            res.status(422).json({message: 'Pet não encontrado!'})
        }

        res.status(200).json({pet})
    }catch(error) {
        res.status(500).json({ error: error })
    }
} )

router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const pet = await Pet.findOne({ _id: id })
        if(!pet) {
            res.status(422).json({message: 'Pet não encontrado!'})
            return
        }

    const { nome, raca, idade, peso, porte, isVermifugado, observacoes } = req.body


    try{    
        await Pet.deleteOne({ _id: id })

        res.status(200).json({message: 'O pet foi removido com sucesso!'})
    }catch(error) {
        res.status(500).json({ error: error })
    }
} )

module.exports = router
import { useState } from 'react'

import formStyles from './Form.module.css'

import Input from './Input'
import Select from './Select'

function PetForm({ handleSubmit, petData, btnText }) {
  const [pet, setPet] = useState(petData || {})
  const [preview, setPreview] = useState([])
  const colors = ['Branco', 'Preto', 'Cinza', 'Caramelo']
  const race = ['Cachorro', 'Gato']
  const sex = ['Macho', 'Femea']
  const size = ['Pequeno', 'Medio', 'Grande']

  function onFileChange(e) {
    console.log(Array.from(e.target.files))
    setPreview(Array.from(e.target.files))
    setPet({ ...pet, images: [...e.target.files] })
  }

  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value })
  }

  function handleColor(e) {
    setPet({
      ...pet,
      color: e.target.options[e.target.selectedIndex].text,
    })
  }

  function handleRace(e) {
    setPet({
      ...pet,
      race: e.target.options[e.target.selectedIndex].text,
    })
  }

  function handleSex(e) {
    setPet({
      ...pet,
      sex: e.target.options[e.target.selectedIndex].text,
    })
  }

  function handleSize(e) {
    setPet({
      ...pet,
      size: e.target.options[e.target.selectedIndex].text,
    })
  }

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(pet)
  }

  return (
    <form onSubmit={submit} className={formStyles.form_container}>
      <div className={formStyles.preview_pet_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Imagens do Pet"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome do Pet"
        type="text"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handleChange}
        value={pet.name || ''}
      />
      <Input
        text="Idade do Pet"
        type="number"
        name="age"
        placeholder="Digite a idade"
        handleOnChange={handleChange}
        value={pet.age || ''}
      />
      <Select
        name="sex"
        text="Selecione o sexo"
        options={sex}
        handleOnChange={handleSex}
        value={pet.sex || ''}
      />

      <Select
        name="size"
        text="Tamanho do pet"
        options={size}
        handleOnChange={handleSize}
        value={pet.size || ''}
      />
      <Input
        text="Peso do Pet"
        type="number"
        name="weight"
        placeholder="Digite o peso aproximado"
        value={pet.weight || ''}
        handleOnChange={handleChange}
      />
      <Select
        name="race"
        text="Selecione a espécie"
        options={race}
        handleOnChange={handleRace}
        value={pet.race || ''}
      />

      <Input
        text="Observaçao sobre o pet"
        type="text"
        name="description"
        placeholder="Observação"
        handleOnChange={handleChange}
        value={pet.description || ''}
      />
      <input type="submit" value={btnText} />
    </form>
  )
}

export default PetForm

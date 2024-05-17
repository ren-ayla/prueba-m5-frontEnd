export const animalData = (jsonAnimales, inputAnimal) => {
    try {
        const animalData = jsonAnimales.filter(animal => animal.name === inputAnimal)
        return animalData[0]
    } catch (error) {
        throw new Error('No se pudo obtener la data del animal ingresado.', error)
    }
}
import { getAnimalJson } from "./helpers/apiFetch.js";
import { showPreview } from "./showPreview.js";
import { animalData } from "./utils/animalData.js";
import { getAnimalInstance } from "./utils/getAnimalInstance.js";
import { renderAnimal } from "./createCard.js";

const inputAnimal = document.querySelector("#animal")
const inputEdad = document.querySelector("#edad")
const inputComentarios = document.querySelector("#comentarios")

const btnRegistrar = document.querySelector("#btnRegistrar")
const containerPreview = document.querySelector("#preview")
const containerAnimales = document.querySelector("#Animales")



let jsonAnimales = '';

(async() => {
    try {
        return jsonAnimales = await getAnimalJson()
    } catch (error) {
        throw new Error("Error al intentar obtener .JSON de los animales", error)
    }
})()

inputAnimal.addEventListener('change', async() => {

    let selectedAnimal = inputAnimal.value

    const animal = await animalData(jsonAnimales, selectedAnimal)
    showPreview(animal, containerPreview)
})

const listAnimal = []


btnRegistrar.addEventListener('click', async() => {
    
    let selectedAnimal = inputAnimal.value
    let selectedEdad = inputEdad.value
    let selectedComentarios = inputComentarios.value

    const animal = await animalData(jsonAnimales, selectedAnimal)
    const imagen = animal.imagen
    const sonido = animal.sonido

    getAnimalInstance(selectedAnimal, selectedEdad, imagen, selectedComentarios, sonido, listAnimal)

    renderAnimal(containerAnimales, listAnimal)
    
})




export const createCardAnimal = (listAnimal) => {
    const animalCards = listAnimal.map((animal) => {
        return `

        <div class="card col-3 my-3 mx-4 bg-warning id="animalesCreatedCards">
            <img src="assets/imgs/${animal.img}" class="card-img mt-3">
            <div class="card-body">
                <h4 class="card-title">${animal.nombre}</h4>
            </div>
        </div>

        `
    })

    return animalCards
}

export const renderAnimal = async(container, listAnimal) => {
    const animalCards = await createCardAnimal(listAnimal)

    container.innerHTML = animalCards
}


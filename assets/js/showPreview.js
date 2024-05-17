export const showPreview = async(dataAnimal, containerPreview) => {
    const pathAnimalImg = `assets/imgs/${dataAnimal.imagen}`

    containerPreview.style.backgroundImage = `url(${pathAnimalImg})`
    containerPreview.style.backgroundPosition = 'center'
}
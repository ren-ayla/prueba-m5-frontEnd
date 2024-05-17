const BASE_URL = 'http://127.0.0.1:5500/';

export const getAnimalJson = async () => {
    try {
        const response = await fetch(`${BASE_URL}/animales.json`)
        const data = await response.json()

        return data.animales 

    } catch (error) {
        throw new Error('No se pudieron obtener los datos de animales.')
    }   
    
}

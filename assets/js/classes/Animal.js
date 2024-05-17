export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido
    }

    get nombre() {
        return this._nombre
    }

    get edad() {
        return this._edad
    }

    get img() {
        return this._img
    }

    get comentarios() {
        return this._comentarios
    }

    get sonido() {
        return this._sonido
    }

}

//ANIMALES//
export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    chillar() {
        return this.sonido;
    }
}

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    rugir() {
        return this.sonido;
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    aullar() {
        return this.sonido;
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    grunir() {
        return this.sonido;
    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    sisear() {
        return this.sonido;
    }
}
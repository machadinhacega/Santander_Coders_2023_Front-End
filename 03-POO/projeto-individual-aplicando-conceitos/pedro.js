// Class to manipulate objects
class Utils {
    constructor() {}
    
    static globalId = 0

    static generateId() {
        ++ Utils.globalId
        return Utils.globalId
    }

    static totalProducts() {
        return db.length
    }

    static choiceField(choices, choice) {
        choice = Number(choice)
        if (choice in choices) {
            return {
                'value': choice,
                'display': choices[choice]
            }
        } else {
            throw 'Choose a valid choice.'
        }
    }

    static addObject(cls, args) {
        const obj = new cls(...Object.values(args))
        db.push(obj)
        insertNewProduct(obj)
    }

    static updateObject(id, args) {
        const obj = db.find(item => item.id === id)
        
        if (obj) {
            for (let key of Object.keys(args)) {
                obj[key] = args[key]
            }
        } else {
            throw 'Product not found.'
        }
    }

    static deleteObject(id) {
        const obj = db.find(item => item.id === id)

        if (obj) {
            db = db.filter(item => item !== obj)
        } else {
            throw 'Product not found.'
        }
    }

    static showObjects() {
        return db
    }

    static filterObjects(cls) {
        return db.filter(item => item instanceof cls)
    }
}

// Parent class
class Product {
    constructor(price, product) {
        this._id = Utils.generateId()
        this._price = price
        this._product = product
    }

    get id() {
        return this._id
    }

    set id(val) {
        throw 'ID is immutable.'
    }

    get product() {
        return this._product
    }

    set product(val) {
        throw 'Product type is immutable.'
    }

    get price() {
        return this._price
    }

    set price(val) {
        if (isNaN(val)) {
            throw 'Price must be a number.'
        } else {
            this._price = Number(val)
        }
    }
}

// Child class
class Boat extends Product {
    #categoriesChoices = {
        0: 'Single Scull',
        1: 'Double Scull',
        2: 'Quadruple Scull',
        3: 'Coxless Pair',
        4: 'Coxless Four',
        5: 'Eight',
    }

    constructor(price, category, material) {
        super(price, 'Boat')
        this._category = Utils.choiceField(this.categoriesChoices, category)
        this._material = material
        this._crewSize = this.setCrewSize()
    }

    get categoriesChoices() {
        return this.#categoriesChoices
    }

    setCrewSize() { 
        const val = this.category.value
        if (val === 0) {
            return 1
        }
        if (val === 1 || val === 3) {
            return 2
        }
        if (val === 2 || val === 4) {
            return 4
        }
        return 8
    }

    get category() {
        return this._category
    }

    set category(val) {
        this._category = Utils.choiceField(this.categoriesChoices, val)
        this.crewSize = this.setCrewSize()
    }

    get crewSize() {
        return this._crewSize
    }

    set crewSize(val) {
        this._crewSize = val
    }

    get material() {
        return this._material
    }

    set material(val) {
        this._material = String(val)
    }
}

// Child class
class Oar extends Product {
    #categoriesChoices = {0: 'Sweep', 1: 'Scull'}

    constructor(price, category, material) {
        super(price, 'Oar')
        this._category = Utils.choiceField(this.categoriesChoices, category)
        this._material = material
    }

    get categoriesChoices() {
        return this.#categoriesChoices
    }

    get category() {
        return this._category
    }

    set category(val) {
        this._category = Utils.choiceField(this.categoriesChoices, val)
    }

    get material() {
        return this._material
    }

    set material(val) {
        this._material = String(val)
    }
}

// Database
let db = []


// HTML functions
function submitForm() {
    const priceValue = document.getElementById('price').value
    const categoryValue = document.getElementById('category').value
    const materialValue = document.getElementById('material').value
    let productValue = document.getElementById('product').value

    if (!priceValue || !categoryValue || !materialValue || !productValue) {
        alert('All fields are required.')

    } else {

        if (productValue === 'Boat') {
            productValue = Boat
        } else {
            productValue = Oar
        }

        const data = {
            price: priceValue,
            category: categoryValue,
            material: materialValue
        }

        Utils.addObject(productValue, data)
    }
}

function insertNewProduct(product) {
    const tbody = document.getElementById('products-table-body')
    const newRow = tbody.insertRow()

    for (const key in product) {
        const cell = newRow.insertCell()
        if (key === '_category') {
            cell.textContent = product[key].display
        } else {
            cell.textContent = product[key]
        }
    }

    if (!('_crewSize' in product)) {
        const cell = newRow.insertCell()
        cell.textContent = '-----'
    }

    const cell = newRow.insertCell()
    cell.innerHTML = `<button class="btn btn-sm btn-outline-warning" onclick="${Utils.updateObject}">
                        <i class="fa fa-pencil"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="${Utils.deleteObject(product._id)}">
                        <i class="fa fa-trash"></i>
                    </button>`
}

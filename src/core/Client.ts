export default class Client {
     #id?: string
     #name: string
     #age: number

    constructor(name: string, id: string , age: number){
        this.#name = name
        this.#id = id 
        this.#age = age
    }
    static void(){
        return new Client('', '', 0)
    }

    get id(){
        return this.#id
    }
    get name(){
        return this.#name
    }
    get age(){
        return this.#age
    }
}
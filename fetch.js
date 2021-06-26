export default class Fetch{
    #request
    async fetchAPI(id){
        this.#request = new Request(`https://jsonplaceholder.typicode.com/photos/${id}`)
        const response = await fetch(this.#request)
        return response.json()
    }
}
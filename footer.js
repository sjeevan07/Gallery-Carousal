export default class Footer {
    #id
    #textElement
    constructor() {
        this.#textElement = document.getElementById("text")
        this.#id = this.#textElement.innerHTML
    }
    getId() {
        return this.#id
    }
    clickNext(fetchObject, imageObject) {
        let nextIcon = document.getElementById("nextIcon")
        nextIcon.addEventListener('click', async (event) => {
            this.#id++
            const result = await fetchObject.fetchAPI(this.#id)
            let imageUrl = result.url
            imageObject.changeImage(imageUrl)
            this.#textElement.innerHTML = this.#id
        })
    }
    clickPrevious(fetchObject, imageObject) {
        let previousIcon = document.getElementById("previousIcon")
        previousIcon.addEventListener('click', async (event) => {
            if (this.#id >= 2) {
                this.#id--
                const result = await fetchObject.fetchAPI(this.#id)
                let imageUrl = result.url
                imageObject.changeImage(imageUrl)
                this.#textElement.innerHTML = this.#id
            }
        })
    }

}


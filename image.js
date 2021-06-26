export default class Image{
    #url

    createImageTag(imageUrl){
        this.#url = imageUrl
        let imageTag = document.createElement("img");
        imageTag.id = "image"
        let mainTag = document.querySelector("main")
        let imageElement = mainTag.appendChild(imageTag)
        imageElement.src = this.#url
    }

    changeImage(imageUrl){
        this.#url = imageUrl
        let imageElement = document.getElementById("image")
        imageElement.src = this.#url
    }
}
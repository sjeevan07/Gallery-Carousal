import Fetch from "/fetch.js"
import Image from "/image.js"
import Footer from "/footer.js"

const footer = new Footer();
const fetch = new Fetch();
const image = new Image();

let fetchAPIid = footer.getId()
let result = await fetch.fetchAPI(fetchAPIid);
let imageUrl = result.url;
image.createImageTag(imageUrl)
footer.clickNext(fetch, image)
footer.clickPrevious(fetch, image)

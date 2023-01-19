
import { getFish } from './database.js'

import { FishList } from './FishList.js'

let listed = FishList()

const allFish = getFish()


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".finventory")


parentHTMLElement.innerHTML = FishList()


for (const fish of allFish) {
    console.log(fish, listed)
}
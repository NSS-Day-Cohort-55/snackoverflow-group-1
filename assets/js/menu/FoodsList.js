import * as MenuManger from './MenuManger.js';
import { FoodCard } from './FoodCard.js'

export const FoodList = () => {
    const contentTarget = document.querySelector("main")
    let HTMLString;
    MenuManger.getFoods()
    .then(foodArray => {
        let sortedByPrice = foodArray.sort(function(a, b) {
            return a.price - b.price;
        });
        
        HTMLString = `<div class="row">`
        HTMLString += sortedByPrice.map(food => FoodCard(food)).join('')
        HTMLString += `</div>`
        contentTarget.innerHTML = HTMLString;
    })
    
}

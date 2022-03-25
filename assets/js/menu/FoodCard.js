export const FoodCard = (foodObj) => {

    return `
    <div class="col-sm-6 g-4">
        <div class="card">
        <div class="h-100">
        <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
        </div>
            <div class="card-body">
                ${foodObj.isVegetarian ? `<img src="./assets/images/icon-veg.png">`: ''}
                <h5 class="card-title">${foodObj.name}</h5>
                <p class="card-text">${foodObj.description}</p>
                <p>Price: $${foodObj.price}</p>
                 <button type="button" class="btn btn-primary">Order</button>
                 <select id="quantity">
                 <option selected disabled hidden > Quantity
                 </option>
                 <option>0</option>
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
                 <option>6</option>
                 <option>7</option>
                 <option>8</option>
                 <option>9</option>
                 <option>10</option>
                 </select>
            </div>
        </div>
    </div>
    `
}

//used a ternary operator to check if the foodobj isVegetarian === true and added the veg icon if it is


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
                <!-- <button type="button" class="btn btn-primary">Example Bootstrap Button</button> -->
            </div>
        </div>
    </div>
    `
}

//used a ternary operator to check if the foodobj isVegetarian === true and added the veg icon if it is


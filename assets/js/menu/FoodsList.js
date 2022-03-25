import * as MenuManger from "./MenuManger.js";
import { FoodCard } from "./FoodCard.js";

export const FoodList = () => {
  LunchList();
  DrinkList();
  AppetizersList();
  DessertsList();
};

const LunchList = () => {
  MenuManger.getFoods().then((foodArray) => {
    const foundLunchs = foodArray
      .filter((foodItem) => foodItem.menuId === 1)
      .sort((a, b) => {
        return b.price - a.price;
      });
    let html = `<h2>Lunch</h2><div class="row g-0">`;
    html += foundLunchs.map((lunch) => FoodCard(lunch)).join("");
    html += `</div>`;
    document.querySelector("main").innerHTML += html;
  });
};

const DrinkList = () => {
  MenuManger.getFoods().then((foodArray) => {
    const foundDrinks = foodArray
      .filter((foodItem) => foodItem.menuId === 2)
      .sort((a, b) => {
        return b.price - a.price;
      });
    let html = `<h2>Drinks</h2><div class="row g-0">`;
    html += foundDrinks.map((drink) => FoodCard(drink)).join("");
    html += `</div>`;
    document.querySelector("main").innerHTML += html;
  });
};

const AppetizersList = () => {
  MenuManger.getFoods().then((foodArray) => {
    const foundAppetizers = foodArray
      .filter((foodItem) => foodItem.menuId === 3)
      .sort((a, b) => {
        return b.price - a.price;
      });
    let html = `<h2>Appetizers</h2><div class="row g-0">`;
    html += foundAppetizers.map((appetizer) => FoodCard(appetizer)).join("");
    html += `</div>`;
    document.querySelector("main").innerHTML += html;
  });
};

const DessertsList = () => {
  MenuManger.getFoods().then((foodArray) => {
    const foundDesserts = foodArray
      .filter((foodItem) => foodItem.menuId === 4)
      .sort((a, b) => {
        return b.price - a.price;
      });
    let html = `<h2>Desserts</h2><br><div class="row g-0">`;
    html += foundDesserts.map((appetizer) => FoodCard(appetizer)).join("");
    html += `</div>`;
    document.querySelector("main").innerHTML += html;
  });
};

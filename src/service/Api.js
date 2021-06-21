export async function UseSeachDrinks(name) {
  const data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );

  const nameDrink = await data.json();

  return nameDrink.drinks;
}

export async function RandomDrinks() {
  const data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
  );

  const randomDrink = await data.json();

  return randomDrink.drinks;
}

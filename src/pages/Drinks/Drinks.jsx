import { useEffect, useState } from "react";
import { UseSeachDrinks } from "../../service/Api";
import { Container } from "./styleDrinks";

export function Drinks() {
  const [drinks, setDrinks] = useState([]);

  async function search() {
    const data = await UseSeachDrinks("margarita");
    setDrinks(data);
  }

  useEffect(() => {
    search();
  }, []);
  
  return (
    <Container>
      {drinks.map((drink) => {
        return (
          <div className='main-div' key={drink.strDrink}>
            <img className="img-card-drinks" src={drink.strDrinkThumb} alt="" />
            <div>
              <h5>{drink.strDrink}</h5>
              <h6>Principais Ingredientes:</h6>
              <p>{drink.strIngredient1}</p>
              <p>{drink.strIngredient2}</p>
              <p>{drink.strIngredient3}</p>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

import { useEffect, useState } from "react";
import { RandomDrinks } from "../../service/Api";
import { Container, HomeContainer } from "./styleIndex";
export function Index() {
  const [data, setData] = useState([]);

  async function popDrinks() {
    const drinksPop = await RandomDrinks();
    setData(drinksPop);
  }

  useEffect(() => {
    popDrinks();
  }, []);
  console.log(data);
  return (
    <HomeContainer>
      <h1>Drinks Populares</h1>
      <Container>
        {data.slice(0, 10).map((drink) => {
          return (
            <div className="main-div" key={drink.strDrink}>
              <img
                className="img-card-drinks"
                src={drink.strDrinkThumb}
                alt="img"
              ></img>
              <div>

              <h3>{drink.strDrink}</h3>
              <button>Experimente Já</button>
              </div>
            </div>
          );
        })}
      </Container>
    </HomeContainer>
  );
}

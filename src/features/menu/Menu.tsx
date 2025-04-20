import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { PizzaType } from "../../types/Pizza";

function Menu() {
  const menu = useLoaderData() as PizzaType[];

  return (
    <ul>
      {menu.map((pizza: PizzaType) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;

export async function loader() {
  const menu = await getMenu();
  return menu;
}

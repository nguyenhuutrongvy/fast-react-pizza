import { useLoaderData } from "react-router-dom";
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

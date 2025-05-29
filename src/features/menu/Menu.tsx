import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { PizzaType } from "../../types/Pizza";

function Menu() {
  const menu = useLoaderData() as PizzaType[];

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza: PizzaType) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;

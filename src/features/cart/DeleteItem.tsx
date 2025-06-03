import { deleteItem } from "./cartSlice";
import { useAppDispatch } from "../../hooks";
import Button from "../../ui/Button";

function DeleteItem({ pizzaId }: { pizzaId: number }) {
  const dispatch = useAppDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

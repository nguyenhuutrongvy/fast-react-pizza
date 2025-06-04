import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Cart from "./features/cart/Cart";
import { clearCart } from "./features/cart/cartSlice";
import Menu from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import { createOrder, getMenu, getOrder } from "./services/apiRestaurant";
import store from "./store";
import { OrderType } from "./types/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import { isValidPhone } from "./utils/helpers";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: async function loader() {
          const menu = await getMenu();
          return menu;
        },
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: async function action({ request }) {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);

          const errors = { phone: "" };
          if (!isValidPhone(data.phone.toString())) {
            errors.phone =
              "Please give us your correct phone number. We might need it to contact you.";
          }

          // Object.keys(errors).length > 0
          if (errors.phone.length > 0) {
            return errors;
          }

          const order: OrderType = {
            ...data,
            cart: JSON.parse(data.cart.toString()),
            priority: data.priority === "on",
          };

          // If everything is okay, create new order and redirect
          const newOrder: OrderType = await createOrder(order);

          // Don't overuse this way!
          store.dispatch(clearCart());

          return redirect(`/order/${newOrder.id}`);
        },
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: async function loader({ params }) {
          const order = await getOrder(params.orderId ? params.orderId : "");
          return order;
        },
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

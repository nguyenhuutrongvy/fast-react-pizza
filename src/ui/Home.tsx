import Button from "./Button";
import CreateUser from "../features/user/CreateUser";
import { getUsername } from "../features/user/userSlice";
import { useAppSelector } from "../hooks";
import { isEmpty } from "../utils/helpers";

function Home() {
  const username = useAppSelector(getUsername);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {isEmpty(username) ?
        <CreateUser />
      : <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      }
    </div>
  );
}

export default Home;

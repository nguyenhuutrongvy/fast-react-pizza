import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";
import { useAppDispatch } from "../../hooks";
import Button from "../../ui/Button";
import { isEmpty } from "../../utils/helpers";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (isEmpty(username)) {
      return;
    }

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

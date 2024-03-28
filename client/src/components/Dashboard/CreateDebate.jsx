import { useMutation } from "@apollo/client";
import { CREATE_DEBATE } from "../../utils/mutations";
import { useState } from "react";

export default function CreateDebate({ loggedInUser }) {
  const [formState, setFormState] = useState({
    debateTitle: "",
    numOfRounds: "",
  });

  const { debateTitle, numOfRounds } = formState;

  const [createDebate, { error }] = useMutation(CREATE_DEBATE);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("debateTitle", debateTitle);

    try {
      const data = await createDebate({
        variables: {
          debate: {
            title: debateTitle,
            numOfRounds: parseInt(numOfRounds),
          },
        },
      });

      console.log("debate created", data);
      setFormState({
        debateTitle: "",
        numOfRounds: "",
      });
      window.location.replace("/dashboard");
    } catch (error) {
      console.error(error);
    }
    // Handle form submission logic here
    // You can access the form values using this.state.debateTitle and this.state.debateDescription
  };

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    console.log("name", name);
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            className="debateFormInput form-control"
            id="floatingInput"
            type="text"
            name="debateTitle"
            value={formState.debateTitle}
            onChange={handleInputChange}
            placeholder=""
          />
          <label for="floatingInput">&nbsp;&nbsp; Enter Debate Title...</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            className="debateFormInput form-control "
            type="number"
            id="numOfRounds"
            name="numOfRounds"
            max={7}
            min={3}
            value={formState.numOfRounds}
            onChange={handleInputChange}
            placeholder=""
          />
          <label for="numOfRounds">&nbsp;&nbsp; Enter Number of Rounds [3-7]...</label>
        </div>
        <br />

        <button className="debateFormInput" type="submit">
          Create Debate
        </button>
      </form>
    </div>
  );
}

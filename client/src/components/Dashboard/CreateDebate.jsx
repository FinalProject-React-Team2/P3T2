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

   
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="debateFormInput"
              type="text"
              name="debateTitle"
              value={formState.debateTitle}
              onChange={handleInputChange}
              placeholder="Enter Debate title..."
            />
          </label>
          <br />
          <label>
            <input
              className="debateFormInput"
              type="number"
              name="numOfRounds"
              max={7}
              min={3}
              value={formState.numOfRounds}
              onChange={handleInputChange}
              placeholder="Enter number of rounds..."
            />
          </label>
          <br />

          <button className="debateFormInput" type="submit">
            Create Debate
          </button>
        </form>
      </div>
    );
  }


import React, { Component } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_DEBATE } from "../utils/mutations";
import { useState } from "react";

function CreateDebate({ loggedInUser }) {

    const [debateTitle, setDebateTitle] = useState("");
    const [numOfRounds, setNumOfRounds] = useState(3);

    
    const [ createDebate, {error} ] = useMutation(CREATE_DEBATE); 

   const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const {data} = await createDebate({
                variables: {
                title: debateTitle,
                numOfRounds: 3, 
                status: "open"
                }
            })
         
            console.log("debate created", data);
            setDebateTitle('') 
        } catch (e) {
             console.error(e);
        }
        // Handle form submission logic here
        // You can access the form values using this.state.debateTitle and this.state.debateDescription
    };
 

    const handleInputChange = async (event) => {
        const { name, value } = event.target;
        if (name === 'debateTitle') {
            setDebateTitle(value);
        }

        // this.setState({ [name]: value });
    };
    
    

    
        return (
            <div>
                <button>Open Challenge</button>
                <form onSubmit={handleSubmit}>
                    <label>
                        Debate Title:
                        <input
                            type="text"
                            name="debateTitle"
                            value={debateTitle}
                            onChange={handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Debate Description:
                        <textarea
                        type="text"
                            name="numOfRounds"
                            value={numOfRounds}
                            onChange={handleInputChange}
                        ></textarea>
                    </label>
                    <br />

                    <button type="submit">Create Debate</button>
                </form>
            </div>
        );
    }





export default CreateDebate;
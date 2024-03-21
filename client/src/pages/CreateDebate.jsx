// //create the open challenge page 
// this should link to the open challenge button the Dashboard//

// import { Component } from "react";
import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { Link } from "react-router-dom";
// import Dashboard from "./Dashboard"


class CreateDebate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            debateTitle: "",
            debateDescription: ""
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        // You can access the form values using this.state.debateTitle and this.state.debateDescription
    };

    render() {
        return (
            <div>
                <button>Open Challenge</button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Debate Title:
                        <input
                            type="text"
                            name="debateTitle"
                            value={this.state.debateTitle}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        Debate Description:
                        <textarea
                            name="debateDescription"
                            value={this.state.debateDescription}
                            onChange={this.handleInputChange}
                        ></textarea>
                    </label>
                
                    <br />
                    <button type="submit">Create Debate</button>
                </form>
            </div>
        );
    }
}

export default CreateDebate;
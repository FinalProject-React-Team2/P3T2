// import React, { Component } from "react"; // Import React and Component from react library

// class CreateDebate extends Component { // Define CreateDebate component
//     constructor(props) { // Constructor to initialize component state
//         super(props);
//         this.state = {
//             debateTitle: "",
//             debateDescription: ""
//         };
//     }

//     handleInputChange = (event) => { // Event handler for input change
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = (event) => { // Event handler for form submission
//         event.preventDefault();
//         // Handle form submission logic here
//         // You can access the form values using this.state.debateTitle and this.state.debateDescription
//     };

//     render() { // Render method to render the component
//         return (
//             <div className="create-debate-page"> {/* Add a class to the div to style it as a full page */}
//                 <button>Open Challenge</button> {/* Button to open the debate form */}
//                 <form onSubmit={this.handleSubmit}> {/* Form to create a debate */}
//                     <label>
//                         Debate Title:
//                         <input
//                             type="text"
//                             name="debateTitle"
//                             value={this.state.debateTitle}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <br />
//                     <label>
//                         Debate Description:
//                         <textarea
//                             name="debateDescription"
//                             value={this.state.debateDescription}
//                             onChange={this.handleInputChange}
//                         ></textarea>
//                     </label>
                
//                     <br />
//                     <button type="submit">Create Debate</button> {/* Button to submit the form */}
//                 </form>
//             </div>
//         );
//     }
// }

// export default CreateDebate; // Export CreateDebate component as default

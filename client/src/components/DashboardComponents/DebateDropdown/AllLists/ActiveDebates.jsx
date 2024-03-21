// includes specific debte details, the argumet,s te speakers and the voting FileSystem.//inclu
//include some sort of activedebates list that shows all the debates that are currently active. This list should include specific debate details, the arguments, the speakers, and the voting system. it should reach out eventually to uor server and get the array of current active debates

import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function ActiveDebates() {
   return (
       <div>
       <h1>Active Debates</h1>
       <p>
           Here are the current active debates:
       </p>
       <select>
           <option value="/debate1">Debate 1</option>
           <option value="/debate2">Debate 2</option>
           <option value="/debate3">Debate 3</option>
       </select>
       </div>
   );
}

export default ActiveDebates;

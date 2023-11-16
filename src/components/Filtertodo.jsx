import React from "react";

import "./CSS/Filtertodo.css"; 
import { Form } from "react-bootstrap";

const Filtertodo = ({setfiltertodo}) => {
  return (
    <div>
      <Form.Select onChange={(e)=>setfiltertodo(e.target.value)} className="bb" aria-label="Default select example" >
     
      <option value="ALL">ALL</option>
      <option value="Done">Done</option>
      <option value="Not Done">Not Done</option>
    </Form.Select>
    </div>
  );
};

export default Filtertodo;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import { addtask } from "../Redux/Slice/TodoSlice";
 import "./CSS/AddTask.css";

const AddTask = () => {
  const [newtodo, setnewtodo] = useState({
    id: Math.random(),
    description: "",
    isdone: false
  });
  const dispatch = useDispatch();
  return (
    <div>
      <InputGroup className="mother mb-3">
        <Form.Control
        value={newtodo.description}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) =>
            setnewtodo({ ...newtodo, description: e.target.value })
          }
        />
        <button
          onClick={() => {
            return (
              dispatch(addtask(newtodo)),
              setnewtodo({
                id: Math.random(),
                description: "",
                isdone: false
              })
            );
          }}
        >
          ADD
        </button>
      </InputGroup>
    </div>
  );
};

export default AddTask;

// btn
//

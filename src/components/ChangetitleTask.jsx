import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updatetask } from "../Redux/Slice/TodoSlice";

export const ChangetitleTask = ({ todo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newdescription, setnewdescription] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <h1
        className={todo.isdone ? "titleisdone" : ""}
        variant="primary"
        onDoubleClick={handleShow}
      >
        {todo.description}
      </h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                placeholder={todo.description}
                autoFocus
                onChange={(e) => setnewdescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
             { return dispatch(
                updatetask({
                  id: todo.id,
                  todo: { ...todo, description: newdescription }
                }),
              ) , handleClose()}
            }
          >
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

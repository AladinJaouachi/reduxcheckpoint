// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./CSS/Task.css";
import { deletetask, updatetask } from "../Redux/Slice/TodoSlice";
import { ChangetitleTask } from "./ChangetitleTask";

const Task = ({ todo }) => {
  // const [etat, setetat] = useState(todo.isdone);
  // console.log(etat);
  // const [couleur, setCouleur] = useState("red");
  // function handleClick() {
  //   setetat(!etat);
  // }

  const dispatch = useDispatch();
  return (
    <div className="father">
      <h1>
        <ChangetitleTask todo={todo} />
      </h1>
      <div className="btns">
        {todo.isdone ? (
          <button
            className="btnisdone"
            onClick={() =>
              dispatch(
                updatetask({
                  id: todo.id,
                  todo: { ...todo, isdone: !todo.isdone }
                })
              )
            }
          >
            Done
          </button>
        ) : (
          <button
            className="btnnotdone"
            onClick={() =>
              dispatch(
                updatetask({
                  id: todo.id,
                  todo: { ...todo, isdone: !todo.isdone }
                })
              )
            }
          >
            Not Done
          </button>
        )}

        <button onClick={() => dispatch(deletetask(todo.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Task;

// btn 1
// onClick={() =>
//   dispatch(
//     updateTask({
//       id: todo.id,
//       todo: { ...todo, isdone: !todo.isdone }
//     }),handleClick(etat)
//   )
// }

// btn 2
// onClick={() => {
//   handleClick(etat);
// }}

// btn 3
//}

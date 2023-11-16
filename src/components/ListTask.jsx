import React from "react";
import "../components/CSS/ListTask.css";
// import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { useSelector } from "react-redux";
// import { deletetask } from "../Redux/Slice/TodoSlice";

const ListTask = ({ filtertodo }) => {
  const listTodo = useSelector((state) => state.todo.todoData);

  // const dispatch = useDispatch();
  return (
    <div>
      {filtertodo==="ALL" || filtertodo==="" ? (listTodo.map((todo) => <Task key={todo.id} todo={todo} />) ) :(filtertodo === "Done"
        ? listTodo
            .filter((todo) => todo.isdone)
            .map((todo) => <Task key={todo.id} todo={todo} />)
        : listTodo
            .filter((todo) => !todo.isdone)
            .map((todo) => <Task key={todo.id} todo={todo} />))}
      
    </div>
  );
};

export default ListTask;

import React, { useState } from "react";
import Swal from 'sweetalert2';

import "./todo.css";
import TasksC from "./taskComponent"; // Corrected file import
import Navbar from "./TodoNavbar";
import EditTodo from './editTodo'

function Todo() {
  const [todo, setTodo] = useState({
    task: "",
    status: "pending",
  });

  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!todo.task.trim()) return; // Prevent adding empty tasks
    setTodos([...todos, todo]);
    setTodo({ task: "", status: "pending" }); // Reset input
  };

  const markTaskAsDone = (index) => {
    const updatedTodos = todos.map((item, idx) =>
      idx === index ? { ...item, status: "done" } : item
    );
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove the selected task from todos
        const filteredTodos = todos.filter((_, idx) => idx !== index);
        setTodos(filteredTodos);
  
        // Show confirmation message
        Swal.fire({
          title: "task removed!",
          text: "Your task has been deleted.",
          icon: "success",
        });
      }
    });
  };
  

const editTask=((index)=>{
  // alert(index)
  <EditTodo/>
})



  return (

    <div className="container mt-5">


      <div className="row">
        <Navbar />
        <div className="col-sm-12 mt-4">
          <div className="card shadow" style={{ backgroundColor: "rgba(254, 255, 255, 0.227)" }}>
            <div className="card-body rounded" id="formColor">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addTask();
                }}
              >
                <div className="row">
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="taskInput"
                      value={todo.task}
                      onChange={(e) =>
                        setTodo({ ...todo, task: e.target.value })
                      }
                      placeholder="Enter your task"
                    />
                  </div>
                  <div className="col-sm-2 text-end">
                    <button className="btn btn-dark w-100" type="submit">
                      <i className="bi bi-plus-lg"></i> Add Task
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {todos.map((item, index) => (
          <TasksC
            key={index}
            task={item.task}
            status={item.status}
            markAsDone={() => markTaskAsDone(index)}
            deleteTask={() => deleteTask(index)}
            editTask={()=> editTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;

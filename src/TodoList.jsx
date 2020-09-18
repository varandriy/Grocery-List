import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  deleteTask,
  addTask,
  fetchTasks,
  doneTask,
  setTaskPriority,
  sortByTaskPriority
} from "./redux/actions/toDoListActions";
import { Input, Button } from "antd";

const Styled = styled.div`
  .delete-button {
    margin-left: 10px;
  }
  .add-item-input {
    width: 300px;
  }
`;

const Component = ({ todos, deleteTask, addTask, fetchTasks, doneTask, setTaskPriority, sortByTaskPriority }) => {
  const [todoText, setTodoText] = React.useState("");

  React.useEffect(() => {
    fetchTasks();
  }, []);


  return (
    <Styled>
      <Input
        className={"add-item-input"}
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button
        onClick={() => {
          todoText && addTask(todoText);
          setTodoText("");
          sortByTaskPriority();
        }}
      >

        Add
      </Button>

      {todos.map((todo) => {
        return (
          <div className={"ant-row"} key={todo.id}>
            <div>
              <div>{todo.text}</div>
            </div>
            <div>
              <select value={todos.priority} onChange={(e) => {
                setTaskPriority({ id: todo.id, priority: e.target.value })
                sortByTaskPriority();
              }
              }>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>

              </select>
            </div>
            <Button onClick={() => deleteTask(todo.id)}
              className={"delete-button"}>Delete task
            </Button>

            <Button onClick={() => {
              doneTask({ id: todo.id, isDone: !todo.isDone });
              
            }}>
              {todo.isDone ? "Have" : "Run out"}
            </Button>
            <div>{todo.time}</div>
          </div>
        );
      })}


    </Styled>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = { deleteTask, addTask, fetchTasks, doneTask, setTaskPriority, sortByTaskPriority };

export const TodoList = connect(mapStateToProps, mapDispatchToProps)(Component);

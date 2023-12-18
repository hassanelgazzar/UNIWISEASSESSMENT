import React from "react";
import { Grid } from "@mui/material";

import Todo from "./Todo";
import { Todo as TodoType } from "../types";

interface TodoListProps {
  todos: TodoType[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <Grid item xs={12} md={6} key={todo.id}>
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;

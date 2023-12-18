import React from "react";
import { Todo as TodoType } from "../types";
import {
  Checkbox,
  Card,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface TodoProps {
  todo: TodoType;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <Card sx={{ background: todo.completed ? "rgb(174, 215, 168)" : "none" }}>
      <ListItem
        key={todo.id}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="comments"
            onClick={() => deleteTodo(todo.id)}
          >
            &#x2716;
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton
          role={undefined}
          onClick={() => toggleTodo(todo.id)}
          dense
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ "aria-labelledby": todo.id }}
              color="success"
            />
          </ListItemIcon>
          <ListItemText
            id={todo.id}
            primary={todo.text}
            sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
          />
        </ListItemButton>
      </ListItem>
    </Card>
  );
};

export default Todo;

import React, { useState } from "react";
import { Grid, Box, TextField, Button } from "@mui/material";
import TodoList from "./TodoList";
import { Todo as TodoType } from "../types";
import mockTodos from "./mockData";
import TodoTabs from "./TodoTabs";
import AddTodoPopover from "./AddTodoPopover";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(mockTodos);
  const [newTodo, setNewTodo] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tabValue, setTabValue] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: TodoType = {
      id: Date.now().toString() + Math.random().toString(36),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const getFilteredTodos = () => {
    switch (tabValue) {
      case 0:
        return filteredTodos;
      case 1:
        return filteredTodos.filter((todo) => !todo.completed);
      case 2:
        return filteredTodos.filter((todo) => todo.completed);
      default:
        return filteredTodos;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={9}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                type="text"
                placeholder="Todo Name"
                value={searchTerm}
                size="small"
                fullWidth
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Grid>
            <Grid item xs={3} textAlign={"end"}>
              <AddTodoPopover
                id={id}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                onAddTodo={addTodo}
                newTodo={newTodo}
                setNewTodo={setNewTodo}
              />
              <Button variant="contained" size="medium" onClick={handleClick}>
                Add New Todo
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/* Use TodoTabs component */}
          <TodoTabs tabValue={tabValue} handleTabChange={handleTabChange} />
          {/* Use TabPanel to conditionally render todos based on the selected tab */}
          <TodoList
            todos={getFilteredTodos()}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoApp;

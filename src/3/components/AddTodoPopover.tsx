import React from 'react';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface AddTodoPopoverProps {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
  onAddTodo: () => void;
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}

const AddTodoPopover: React.FC<AddTodoPopoverProps> = ({
  id,
  open,
  anchorEl,
  onClose,
  onAddTodo,
  newTodo,
  setNewTodo,
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div style={{ padding: "20px" }}>
        <TextField
          label="New Todo"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          size="small"
        />
        <Button
          onClick={onAddTodo}
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    </Popover>
  );
};

export default AddTodoPopover;

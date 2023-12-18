// src/components/TodoTabs.tsx
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface TodoTabsProps {
  tabValue: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TodoTabs: React.FC<TodoTabsProps> = ({ tabValue, handleTabChange }) => {
  return (
    <Tabs value={tabValue} onChange={handleTabChange} centered sx={{m:2}}>
      <Tab label="All" />
      <Tab label="Pending" />
      <Tab label="Done" />
    </Tabs>
  );
};

export default TodoTabs;

import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";

const Task2: FunctionComponent = () => {
  const data = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  const [filteredItems, setFilteredItems] = useState<string[]>(data);

  const handleSearchChange = (searchValue: string) => {
    filterItems(searchValue);
  };

  const filterItems = (searchValue: string) => {
    const filtered = searchValue
      ? data.filter((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        )
      : data;
    setFilteredItems(filtered);
  };
  return (
    <div>
      <Input onSearchChange={handleSearchChange} />
      <br />
      <List items={filteredItems} />
    </div>
  );
};

export default Task2;

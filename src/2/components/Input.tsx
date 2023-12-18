import { FunctionComponent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  onSearchChange: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default Input;

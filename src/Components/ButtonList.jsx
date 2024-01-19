import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"></Button>
      <Button name="Music"></Button>
      <Button name="Lo-fi"></Button>
      <Button name='Bollywood'></Button>
      <Button name="Hollywood"></Button>
      <Button name="Cricket"></Button>
      <Button name='Cinema'></Button>
      <Button name="Live"></Button>
      <Button name="Gaming"></Button>
      <Button name="News"></Button>
      <Button name='Reacently Uploaded'></Button>
      <Button name="Comedy"></Button>
    </div>
  );
};

export default ButtonList;

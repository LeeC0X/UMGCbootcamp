import React, { useState } from 'react';
import {v4 as uuid} from "uuid";
import Item from './Item';
import NewMadLibForm from './NewMadLibForm';
import useToggleState from "./hooks/useToggleState";
import "./MadLibBoard.css";

const MadLibBoard = () => {
  const INITIAL_STATE = []
  const [items, setItems] = useState(INITIAL_STATE)
  const addItem = (newItem) => {
    setItems(items => [...items, {...newItem, id: uuid() }])

  }
  const handleRemove = (id) => {
   const newList = items.filter((item) => item.id !== id);
   setItems(newList)
  }

  return (
    <div className="w3-margin">
      <h1>MadLibs!!</h1>
      <div>
        <div>
          <NewMadLibForm addItem={addItem} />
        </div>
        <div>
          {items.map(({id, noun, noun2, adjective, color }) =>
          <div>
            <Item id={id} noun={noun} noun2={noun2} adjective={adjective} color={color} key={id} />
            <div className="w3-btn w3-ripple w3-border w3-round w3-text-red w3-tiny" onClick={() => handleRemove(id)}>restart</div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MadLibBoard;

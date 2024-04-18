import React, { useState } from "react";

const useToggleState = (inital_state=true) => {
  const [state, setState] = useState(inital_state);
  const toggleState = () => {
    setState(state => !state)
  }
  return [state, toggleState]
}

export default useToggleState;

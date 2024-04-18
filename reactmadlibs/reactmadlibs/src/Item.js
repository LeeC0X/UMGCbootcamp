import React, { useState } from 'react';

const Item = (props) => {

  return (
    <div className="">
      <h3>The Story of { props.noun }Man</h3>
      <h5>Once upon a time there lived a squire, {props.noun}Man.</h5>
      <h5>They longed whole heartedly for a {props.adjective} creature that was known</h5>
      <h5>as {props.noun2}BottomedMan.</h5>
      <h5>This creature was known to inhabit a nearby forest and have a magical power</h5>
      <h5>that would make the skies rain a {props.color} dreadful rain.</h5>
      <h5>Alas, it was not to be, {props.noun}Man would never find their {props.noun2}BottomedMan </h5>
      <h5>and live forever in a treacherous sorrow.</h5>
    </div>
  )
}

export default Item;

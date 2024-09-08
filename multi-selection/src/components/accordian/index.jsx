
import React, { useState } from 'react';
import data from "./data.js";
import "./style.css"
export default function Accordian(){
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState();
  const [multiSelected, setMultiSelected] = useState([]);
  function handleSingleSelection(getCurrentID){

    setSelected(getCurrentID === selected ? null : getCurrentID);

  }
  const handleMultiSelection = (getCurrentID) => {
    multiSelected.includes(getCurrentID) ? setMultiSelected( (prev) => prev.filter( (item) => getCurrentID !== item)) :
    setMultiSelected( (previousSelected) => [...previousSelected, getCurrentID] )
  }
  const toggleMultiSelection = () => {
    setEnableMultiSelection( (status) => status ? false : true );
    console.log(enableMultiSelection);
  }
  return (
    <div className="wrapper">
      <button onClick={ () => toggleMultiSelection()}> Enable Multi Selection </button>
      <div className="accordian">
        {
          data && data.length > 0 ?
           data.map( (dataItem) =>
           <div key={dataItem.id} onClick={() => enableMultiSelection ? handleMultiSelection(dataItem.id) : handleSingleSelection(dataItem.id)} className="item">
              <div className="question-div">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
             {
              enableMultiSelection ? multiSelected.includes(dataItem.id) ? <div className="content"> {dataItem.answer} </div> : null
              : selected === dataItem.id ? <div className="content"> {dataItem.answer} </div> : null
             }
           </div>
          )
          : <div> No data.. </div>
        }
      </div>
    </div>
  );
}

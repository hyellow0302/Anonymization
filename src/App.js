import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dummydata from "./dummydata";

export default function App() {
  const [isCheck,setIsCheck] = useState(new Array(dummydata.length).fill(false))
  const [Selected, setSelected] = useState("");
  const handleOnClick = (index) => {
    const updateCheckedState = isCheck.map((item, idx)=>idx=== index ? !item : item);
    setIsCheck(updateCheckedState);
  }
  const handleSelect = (e) => {
    setSelected(e.target.value);
  }
  useEffect(()=>console.log({isCheck}),[isCheck])
  const newArrayData = dummydata.map((item, index) =>{
    return(
        <tr>
          <td>{item.fieldName}</td>
          <td>{item.dataType}</td>
          <td>
            <div>
              <input type="checkbox" id={item.fieldName} name={item.fieldName} value={isCheck[index]} onClick={()=>handleOnClick(index)} />
              <label for={item.fieldName}>사용</label>
            </div>
          </td>
          <td>
            <select onChange={handleSelect} value={Selected}>
              {dummydata.algorithm.map((item) => (
                <option value={item} key={item}>{item}
                </option>
              ))}
            </select>
          </td>
        </tr>
    )
  })

  return(
    <form action="">
        <table border="1">
          <tr>
           <th>Filed</th>
           <th>Type</th>
           <th>Check</th>
           <th>Algorithm</th>
         </tr>
        {newArrayData}        
      </table>
      <input type="submit"/>
    </form>
  )
}
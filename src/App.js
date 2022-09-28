import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dummydata from "./dummydata";

export default function App() {
  const [isCheck,setIsCheck] = useState(false)
  const onClick = (event) => {
    if(event.target.checked==true){
      setIsCheck("True");
    }
    else{
      setIsCheck("False");
    }
    console.log({isCheck});
  }

  /*const selectData = dummydata.algorithm.map((algorithm)=>{

  })*/

  const newArrayData = dummydata.map((item) =>{
    return(
        <tr>
          <td>{item.fieldName}</td>
          <td>{item.dataType}</td>
          <td>
            <input type="checkbox" id={item.fieldName} name={item.fieldName} value={isCheck} onClick={onClick} />
            <label for="NAME_output">사용</label>
          </td>
          <td>
            <select name="NAME_Category" id="NAME_Category">
              <option value="2">해시</option>
              <option value="saab">마스킹</option>
              <option value="opel">매핑테이블</option>
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
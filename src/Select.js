import {useState, useEffect} from "react";
import dummydata from "./dummydata";

function Select({algorithm}){
    const [Algorithm, setAlgorithm] = useState({algorithm})
    const [hidden, setHidden] = useState(null)
    const handleChange = () => {
        const newArrayAlgorithm = dummydata.algorithm.map((item) =>{
            item===name?"":setHidden("display:none")
    })}
        //setAlgorithm(newArrayAlgorithm)
    return(
        <select id="Algorithm" name="Algorithm" onChange={()=>handleChange()}>
              <option name="mapping" value="1" style={hidden}>mapping</option>
              <option name="masking" value="2">masking</option>
              <option name="sampling" value="3">sampling</option>
              <option name="processing" value="4">total processing</option>
              <option name="hash algorithm" value="5">hash algorithm</option>
              <option name="AES" value="6">AES</option>
              <option name="rounding" value="7">rounding</option>
              <option name="and bottom" value="8">top and bottom coding</option>
              <option name="add noise" value="9">add noise</option>
              <option name="swapping" value="10">swapping</option>
              <option name="subtotal" value="11">subtotal</option>
        </select>
    )
}

export default Select;
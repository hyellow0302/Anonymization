import Button from "./Button";
import styles from "./App.module.css";

import {useState, useEffect} from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  /*
  const iRunOnlyOnce = () =>{
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, [  ])
  */
  useEffect(()=>{
    console.log("I run only once.");
  },[]);

  useEffect(()=>{
    console.log("I run when 'keyword' changes.");
  },[keyword]);

  useEffect(()=>{
    console.log("I run when 'counter' changes.");
  },[counter]);

  useEffect(()=>{
    console.log("I run when keyword & counter change.");
  },[keyword, counter]);
  /*
  useEffect(()=>{
    if(keyword !== "" && keyword.length>5){
      console.log("SEARCH FOR", keyword);
    }
  },[keyword]);
*/
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here.."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!</button> 
    </div>
    /*
    #6.2 Deps
    - �� �ڵ��� Ư���� �κи��� ��ȭ������, ���ϴ� �ڵ带 ������ �� �ִ� ����� �������
    - ���� ���, ī���͸� ���µ��� �˻��� ��� �Ǹ� ... �� �׷��ϱ�!
    - component�� �� ó�� render�ǰ� ���Ŀ��� ���̻� render�����ʵ��� ��.  
    - useEffect�� 2���� argument�� �����µ�, ù��°�� �� �ѹ��� �����ϰ� ���� �ڵ�, [] ��ȣ �ȿ� �ִ� ���� ��ȭ�� �� �ڵ带 ������ ���̶�� �˷���.
    - ���� []�� array�� �ξ��� �� �ڵ尡 �� �ѹ��� ����� ! 
    */
  );
}

export default App;
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const create = () => {
    if (input.trim() !== "") {
      setList([...list, input]);
      setInput("");
      console.log(list)
    }
  };
  const handleClick = (value) => {
    setCount((prevCount) => prevCount + value);
  };
  const del=(index)=>{
    setList(list.filter((item,ind)=>ind!==index))
  }
  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => handleClick(1)}>Inc</button>
      <button onClick={() => handleClick(-1)}>Dec</button>
      <input
        value={input}
        onChange={handleInputChange}
        placeholder="input value"
      />
      <button onClick={create}>Create</button>
      {list.map((item,index)=>(
        <li key={index}>{item} <button onClick={()=>del(index)}>Del</button></li>
      ))}
    </div>
  );
};

export default Counter;

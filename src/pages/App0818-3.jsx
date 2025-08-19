import React, {useState} from 'react'

const App = () => {
        const[content,setContent]=useState('select');
  return (
    <div>
        <h2>捕捉下拉式方塊內容</h2><hr />
        <select name="" id="" onChange={(e)=>{
            setContent(e.target.value)
        }}>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="react">REACT</option>
        </select>
        
    <button onClick={()=>{
        
        alert(`選擇了：${content}`);
    }}>選擇</button>
    </div>
  )
}

export default App
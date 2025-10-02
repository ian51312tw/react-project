import React, { useState } from 'react'

const App = () => {
    const [inputValue, setInputValue] = useState('');
    console.log('App渲染了')
    function btnHandler() {
        console.log(inputValue)
    }

    return (

        <div className='wrap'>
            <h1>useRef</h1><hr />
            {/* 使用useState */}
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target)} />
            <button onClick={btnHandler}>Click</button>
        </div>
    )
}

export default App
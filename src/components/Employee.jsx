import React from 'react'

// 建立員工元件
// 解構props
const Employee = ({ name, age, heigh, weight }) => {
    return (
        <div className='emp'>
            <h2>姓名：{name}</h2>
            <p>年齡：{age}</p>
            <p>身高：{heigh}</p>
            <p>體重：{weight}</p>
            <p>BMI：{(weight / Math.pow(heigh / 100, 2)).toFixed(2)}</p>
        </div>
    )
}

export default Employee
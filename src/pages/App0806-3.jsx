import Employee from "../components/Employee";

// import React from 'react'
// 建立員工元件
// 解構props
// const Employee = ({ name, age, heigh, weight }) => {
//     return (
//         <div className='emp'>
//             <h2>姓名：{name}</h2>
//             <p>年齡：{age}</p>
//             <p>身高：{heigh}</p>
//             <p>體重：{weight}</p>
//             <p>BMI：{(weight / Math.pow(heigh / 100, 2)).toFixed(2)}</p>
//         </div>
//     )
// }

// 建立物件資料
const employees = {
    emp1: {
        name: "員工1",
        age: "21"
    },
    emp2: {
        name: "員工2",
        age: "22"
    },
    emp3: {
        name: "員工3",
        age: "23"
    }
}

// 建立陣列物件資料
const arrEmployees = [
    {
        id: 1,
        name: "員工1",
        age: "21",
        heigh: "170",
        weight: "70"
    },
    {
        id: 2,
        name: "員工2",
        age: "22",
        heigh: "180",
        weight: "80"
    },
    {
        id: 3,
        name: "員工3",
        age: "23",
        heigh: "190",
        weight: "90"
    }
]

function App() {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 可以以關閉標籤簡化－直接打<Employee/>來取代前後標籤 */}
            {/* 呼叫員工元件，使用固定值 */}
            {/* <Employee name="員工1" age="21"></Employee>
            <Employee name="員工2" age="22"></Employee> */}

            {/* 呼叫員工元件，使用物件資料 */}
            {/* <Employee name={employees.emp1.name} age={employees.emp1.age}></Employee>
            <Employee name={employees.emp2.name} age={employees.emp2.age}></Employee>
            <Employee name={employees.emp3.name} age={employees.emp3.age}></Employee> */}

            {/* 呼叫員工元件，使用陣列物件資料：搭配map迴圈 */}
            {
                arrEmployees.map((emp) => {
                    return (
                        <Employee key={emp.id} name={emp.name} age={emp.age} heigh={emp.heigh} weight={emp.weight} />
                    )
                })
            }

        </div>
    )
}

export default App
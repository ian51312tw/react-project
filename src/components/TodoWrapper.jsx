import { useState } from 'react'
import CreateForm from './CreateForm'
import Todo from './Todo'


const TodoWrapper = () => {
    // 因為有N個todo，所以要用陣列存放
    // const [todos, setTodos] = useState(['繳停車費', '對發票']);
    // 由為陣列內容若有增減時，索引值會異動，
    // 所以避免異動資料時造成索引值錯亂，將陣列改為陣列物件
    // 而key值用亂數來產生


    const [todos, setTodos] = useState(
        [
            { content: '繳停車費', id: Math.random() },
            { content: '對發票', id: Math.random() },
        ]
    );


    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>
            {/* 方法1：傳送todos陣列資料與setTodos方法到Todo元件 */}
            <CreateForm todos={todos} setTodos={setTodos} />


            {/* 方法2：將setTodos方法包裝成一個方法（帶有參數）到Todo元件 */}
            {/*  
            <CreateForm addTodo={(newContent) => {
                // 建立新的todo內容
                // 1. 使用...其餘運算子來保留原陣列內容
                // 2. 再加上新的物件內容
                setTodos([...todos, { content: newContent, id: Math.random() }])
            }} />
            */}
            {
                todos.map((todo) => {
                    return <Todo todo={todo.content} key={todo.id} />
                })
            }


        </div>
    )
}


export default TodoWrapper




import { MdDelete } from "react-icons/md"
import { MdEdit } from "react-icons/md"

const Todo = ({ todo }) => {
    return (
        <div className='todo'>
            {/* <p>停車費</p> */}
            <p>{todo.content}</p>
            <div>
                <MdEdit style={{cursor:"pointer", marginRight:"5px"}}/>
                <MdDelete style={{cursor:"pointer"}}/>
            </div>
        </div>
    )
}


export default Todo


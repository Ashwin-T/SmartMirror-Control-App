import ShowToDo from './ShowTodos';
import AddTodos from './addTodos';
const TodoList = () => {
    return ( 
        <div className = 'todoList'>
            <div className="todoLabel">To Do List</div>
            <ShowToDo/> 
            <AddTodos/>
        </div>
    );
        
}
 
export default TodoList;
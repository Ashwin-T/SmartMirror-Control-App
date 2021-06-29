import ShowToDo from './ShowTodos';
import AddTodos from './addTodos';
const TodoList = () => {
    return ( 
        <div className = 'todoList'>
            <div className="todoLabel">Todo List</div>
            <ShowToDo/> 
            <AddTodos/>
        </div>
    );
        
}
 
export default TodoList;
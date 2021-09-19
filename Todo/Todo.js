import React, {useState} from 'react'
import AppForm from '../AppForm/AppForm'
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo(todos, submitUpdate, completeTodo, handleRemoveItem) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    if (edit.id) {
        return <AppForm edit={edit} onSubmit={submitUpdate} />;
      }

      return todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
          <button type="button" onClick={() => handleRemoveItem(todo.id)}><DeleteForeverIcon /></button>
          </div>
        </div>
      ));
}

export default Todo

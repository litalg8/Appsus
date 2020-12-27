


export function NoteTodos({note}) {
        return (
            <section className="todo-card align-text">
                <div className="note-preview">
                    <h3>{note.info.label}</h3>
                    <ul className="todo-list clean-list">
                        {       note.info.todos.map(todo =>
                                <li className="todo-item"key={todo.id}>
                                    <h4>{todo.txt}</h4>
                                    <button onClick={() => removeTodo(todo.id)}>x</button>
                                </li>)
                        }
                    </ul>
                </div>
            </section>
        )
    
}
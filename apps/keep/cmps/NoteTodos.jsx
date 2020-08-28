


export class NoteTodos extends React.Component {

    
    render() {
        const note = this.props.note;
        // console.log(note)
        return (
            <section className="todo-card">
                <div className="note-preview">
                    <h3>{note.type}</h3>
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
}
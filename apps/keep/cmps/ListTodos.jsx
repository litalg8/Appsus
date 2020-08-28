
export class ListTodos extends React.Component {
    state = {
        todos: this.props.todos,
    }

    getTodoById() {

    }

    onInputChange = (ev) => {
        console.log(ev);
        // const key = this.getKeyByType(this.state.note.type);
        this.setState({
            todos: [ {...this.state.todos, txt: ev.target.value} ]
        })
        // this.props.todos[0] = ev.target.value;

    }

    render() {
        const todos = this.state.todos
        console.log(todos);
        if(!todos) return
        return (
            <ul className="todo-list clean-list">
                {
                    todos.map(todo =>
                        <input type="text" className="todo-card" key={todo.id} value={todo.txt} onChange={this.onInputChange} />)
                }
            </ul>
        )
    }

}
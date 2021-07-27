import React from 'react'




class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = { todos: [], text: '' };
		this.removeTodo = this.removeTodo.bind(this);
	}

	addTodo(e) {
		e.preventDefault();
		this.setState({
			todos: [ this.state.text, ...this.state.todos ],
			text: ''
		});
	}

	removeTodo(name, i){
		let todos = this.state.todos.slice();
		todos.splice(i, 1);
		this.setState({
			todos
		});
	}

	updateValue(e) {
		this.setState({ text: e.target.value})
	}

	render() {
		return(
			<div>
				<form onSubmit = {(e) => this.addTodo(e)}>
					<input
						placeholder="Add Todo"
						value={this.state.text}
						onChange={(e) => {this.updateValue(e)}}
					/>
					<button type="submit">Add Todo</button>
				</form>
				<TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
			</div>
		);
	}
}

class TodoList extends React.Component {

	removeItem(item, i) {
		this.props.removeTodo(item, i);
	}

	render() {
		return(
			<ol>
				{ this.props.todos.map((todo,i) => {
					return <li onClick={() => { this.removeItem(todo, i)}} key={i}>{ todo }</li>
				})}
			</ol>
		);
	}
}

export default Todos;


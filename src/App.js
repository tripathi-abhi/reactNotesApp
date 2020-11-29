import React, { useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";

const App = () => {
	const [todos, setTodos] = useState([
		"Take dogs for a walk",
		"Take the rubbish out",
	]);

	const [input, setInput] = useState("");

	const addTodo = (e) => {
		setTodos([...todos, input]);
		setInput("");
		e.preventDefault();
	};

	return (
		<div className="App">
			<h1>Hello world!</h1>
			<form>
				<FormControl>
					<InputLabel>Write a Todo here...</InputLabel>
					<Input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</FormControl>
				<Button
					disabled={!input}
					type="submit"
					onClick={addTodo}
					variant="contained"
					color="primary"
				>
					Add Todo
				</Button>
			</form>
			<ul>
				{todos.map((todo, index) => (
					<Todo key={index} todo={todo} />
				))}
			</ul>
		</div>
	);
};

export default App;

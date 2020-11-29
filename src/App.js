import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		db.collection("Todos")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				// console.log(snapshot.docs.map((doc) => doc.data()));
				setTodos(snapshot.docs.map((doc) => doc.data().task));
			});
	}, []);

	const addTodo = (e) => {
		db.collection("Todos").add({
			task: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
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

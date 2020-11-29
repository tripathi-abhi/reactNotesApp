import React from "react";
import "./Todo.css";
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Button,
} from "@material-ui/core";
import db from "./firebase";
import DeleteForveverIcon from "@material-ui/icons/Delete";

const Todo = ({ todo }) => (
	<List className="todo-list">
		<ListItem>
			<ListItemText primary={todo.task} secondary="Dummy deadline ⏰" />
			<Button onClick={(e) => db.collection("Todos").doc(todo.id).delete()}>
				<DeleteForveverIcon />
			</Button>
		</ListItem>
	</List>
);

export default Todo;

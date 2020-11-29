import React from "react";
import "./Todo.css";
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
} from "@material-ui/core";

const Todo = ({ todo }) => (
	<List className="todo-list">
		<ListItem>
			<ListItemText primary={todo} secondary="Dummy deadline ⏰" />
		</ListItem>
	</List>
);

export default Todo;

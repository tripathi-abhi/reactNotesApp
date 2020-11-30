import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import db from "./firebase";
import DeleteForveverIcon from "@material-ui/icons/Delete";
import AssignmentTurnedInRoundedIcon from "@material-ui/icons/AssignmentTurnedInRounded";

const Todo = ({ todo }) => (
	<List className="todo-list">
		<ListItem>
			<ListItemText
				secondary={todo.status ? "Todo Completed" : "Dummy deadline ⏰"}
				className={todo.status ? "Complete" : ""}
			>
				{todo.task}
			</ListItemText>
			<Button
				disabled={todo.status}
				variant="contained"
				color="primary"
				onClick={(e) =>
					db.collection("Todos").doc(todo.id).update({ status: true })
				}
			>
				{console.log(todo)}
				<AssignmentTurnedInRoundedIcon />
			</Button>
			<Button onClick={(e) => db.collection("Todos").doc(todo.id).delete()}>
				<DeleteForveverIcon />
			</Button>
		</ListItem>
	</List>
);

export default Todo;

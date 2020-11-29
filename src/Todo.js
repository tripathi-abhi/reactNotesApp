import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const Todo = ({ todo }) => (
	<List>
		<ListItem>
			<ListItemText primary={todo} secondary="Dummy deadline" />
		</ListItem>
	</List>
);

export default Todo;

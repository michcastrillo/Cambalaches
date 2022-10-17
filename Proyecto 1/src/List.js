import React, { useState } from "react"; // React Hooks

function List(props) {
	const [list, setList] = useState(props.users);

	// const removeItem = (index) => {
	// 	setList(list.filter((item) => item !== list[index]));
	// };

	// return (
	// 	<>
	// 		{list && (
	// 			<ul className="list-group">
	// 				{list.map((person, index) => (
	// 					<li className="list-group-item" key={index} >
	// 						{person.name}
	// 						<div>
	// 							<button
	// 								className="btn btn-primary"
	// 								onClick={() => removeItem(index)}
	// 							>
	// 								Remove
	// 							</button>
	// 						</div>
	// 					</li>
	// 				))}
	// 			</ul>
	// 		)}
	// 	</>
	// );
}

export default List;

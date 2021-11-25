import React from "react";

const Box = ({ id, backgroundColor="black", width=5, height=5, remove }) => {
  
	const removeBox = () => remove(id);
	
	return (
		<div>
			<div 
				style= {{
					width: `${width}em`,
					height: `${height}em`,
					backgroundColor
					}}
				/>
				<button onClick={removeBox}>X</button>
		</div>
		);
};

export default Box;

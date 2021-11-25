import React from "react";

const Box = ({ backgroundColor, width, height }) => {
  return (
		<div>
			<div 
				style= {{
					width: `${width}em`,
					height: `${height}em`,
					backgroundColor
					}}
				/>
		</div>
		);
};

export default Box;

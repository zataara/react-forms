import React, { useState } from "react";

/** Form for creating a new box to add to the DOM */

const NewBoxForm = ({addBox}) => {
  const INITIAL_STATE = { backgroundColor: '', width: 0, height: 0};
	const [formData, setFormData] = useState(INITIAL_STATE);
	
	// Send {backgoundColor, width, height} to parent & clear the form.
	
	const handleSubmit = (e) => {
		e.preventDefault();
		addBox(formData);
		setFormData(INITIAL_STATE)
	};

	// Update local state with current state of input element.

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(fData => ({
			...fData,
			[name]: value
		}));
	};

  return (
    <form onSubmit={handleSubmit}>
			<label htmlFor="backgroundColor">Background Color:</label>
      <input 
				id="backgroundColor"
				name="backgroundColor"
				value={formData.backgroundColor}
				onChange={handleChange}
			/>

			<label htmlFor="backgroundColor">Width:</label>
      <input 
				id="width"
				name="width"
				value={formData.width}
				onChange={handleChange}
			/>

			<label htmlFor="backgroundColor">Height:</label>
      <input 
				id="height"
				name="height"
				value={formData.height}
				onChange={handleChange}
			/>

			<button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;

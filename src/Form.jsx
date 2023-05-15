import { useState } from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const FormContainer = styled("div")`
	width: 400px;
	margin: 0 auto;
	padding: 20px;
	background-color: #f5f5f5;
`;

const ToggleContainer = styled("div")`
	display: flex;
	align-items: center;
	margin-top: 20px;
`;

function DirectionalForm() {
	const [isRTL, setIsRTL] = useState(false);
	const [text, setText] = useState("LTR");
	const [formData, setFormData] = useState({
		name: "",
		phoneNumber: "",
		address: "",
		city: "",
		state: "",
		zipcode: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleToggle = () => {
		setIsRTL((prevIsRTL) => !prevIsRTL);
		setText((prevText) => (prevText === "LTR" ? "RTL" : "LTR"));
	};

	return (
		<FormContainer sx={{ direction: isRTL ? "rtl" : "ltr" }}>
			<h2>Bidirectionality Form</h2>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Phone Number"
					name="phoneNumber"
					value={formData.phoneNumber}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Address"
					name="address"
					value={formData.address}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="City"
					name="city"
					value={formData.city}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="State"
					name="state"
					value={formData.state}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Zipcode"
					name="zipcode"
					value={formData.zipcode}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<Button type="submit" variant="contained" color="primary">
					Submit
				</Button>
			</form>
			<ToggleContainer>
				<span>Toggle Direction:</span>
				<FormControlLabel
					control={<Switch checked={isRTL} onChange={handleToggle} />}
					label={text}
				/>
			</ToggleContainer>
		</FormContainer>
	);
}

export default DirectionalForm;

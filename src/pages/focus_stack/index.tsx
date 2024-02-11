import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const LandingPageFocusStack = () => {
	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 0.8,
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	return (
		<Box className="LandingPage_FocusStack" sx={style}>
			<Button component={Link} to="/focus_stack/1" variant="outlined">Flowers Assorted (26 Photos)</Button>
		</Box>
	)
}
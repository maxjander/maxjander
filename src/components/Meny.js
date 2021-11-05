import styled from "styled-components";

import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
	const handleClick = () => setOpen(!open);

	return (
		<Wrapper open={open}>
			<h1>
				<Link to="/" onClick={() => handleClick()}>
					about Me
				</Link>{" "}
			</h1>
			{/* <Link to="/projects" onClick={() => handleClick()}>
				projects
			</Link> */}
			<h1>
				<Link to="/github" onClick={() => handleClick()}>
					git
				</Link>
			</h1>
			<h1>
				<Link to="/contact" onClick={() => handleClick()}>
					contact
				</Link>
			</h1>
		</Wrapper>
	);
};

export default Menu;

const Wrapper = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: pink;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	position: absolute;
	line-height: 2;
	top: 0;
	left: 0;
	height: 100%;
	min-width: 100%;
	z-index: 9;
	transition: transform 0.3s ease-in-out;

	a {
		transition: color 0.3s linear;
		transition: text-shadow 0.3s linear;
		&:hover {
			text-shadow: 1px 1px 50px #303030;
		}
	}
`;

import React from "react";
import styled from "styled-components";
import { Squash } from "hamburger-react";

const Header = ({ open, setOpen }) => {
	return (
		<Wrapper>
			<h1>max jander</h1>
			<Squash toggled={open} toggle={setOpen} easing="ease-in" />
		</Wrapper>
	);
};

export default Header;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 10;
	padding: 20px;
`;

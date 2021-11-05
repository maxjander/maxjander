import React from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";
const Footer = () => {
	const { result, isLoading } = useFetch("  https://api.github.com/users/maxjander");

	return (
		<Wrapper>
			<p>
				{isLoading ? "Loading..." : <a href={result.html_url}> {result.name.toLowerCase()} </a>}
			</p>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

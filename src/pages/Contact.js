import React from "react";
import styled from "styled-components";

const Contact = () => {
	return (
		<Wrapper>
			<h1>Contact</h1>
			<ul>
				<h3>[...]</h3>
				<li>
					<a href="https://github.com/maxjander">github</a>,
				</li>
				<li>
					<a href="https://instagram.com/maxjander">instagram</a>,
				</li>
				<li>
					<a href="mailto: maxjander@gmail.com">email</a>,
				</li>
				<li>
					<a href="https://www.linkedin.com/in/maxjander">linkedin</a>,
				</li>
				<li>
					<a href="https://twitter.com/maxjander">twitter</a>
				</li>
			</ul>
		</Wrapper>
	);
};

export default Contact;

const Wrapper = styled.div`
	padding: 20px;
`;

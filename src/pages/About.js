import React from "react";
import styled from "styled-components";

const About = () => {
	return (
		<Wrapper>
			<h1>Max Jander</h1>
			<p>Im A Front-end student, with history in sales and restaurant management.</p>
			<p>During my school period i've been working extra as a driver and a chef.</p>
			<ul>
				<h3>[...]</h3>
				<li>html</li>
				<li>css</li>
				<li>javascript</li>
				<li>react</li>
				<li>node</li>
				<li>firebase</li>
				<li>git</li>
				<li>ux/ui</li>
			</ul>
			{/* <ul>
				<h3>workplaces.before[...]</h3>
				<li>Driver @ Renta</li>
				<li>Restaurant Manager @ Morfar Ginko</li>
				<li>Account Manager @ Lee Jeans Sweden</li>
				<li>Account Manager @ Nudie Jeans Sweden</li>
			</ul> */}
		</Wrapper>
	);
};

export default About;

const Wrapper = styled.div`
	padding: 20px;
`;

import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import Menu from "./components/Meny";
import Git from "./pages/Git";
import Contact from "./pages/Contact";
const App = () => {
	const [open, setOpen] = useState(false);
	return (
		<Router>
			<Wrapper>
				<Header open={open} setOpen={setOpen} />
				<ContentSpacer>
					<Routes>
						<Route path="/contact" element={<Contact />} />

						<Route exact path="/" element={<About />} />
						<Route path="/github" element={<Git />} />
					</Routes>
				</ContentSpacer>
				<Footer />
			</Wrapper>
			<Menu open={open} setOpen={setOpen} />
		</Router>
	);
};

export default App;
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	justify-items: stretch;
	align-items: stretch;

	height: 100vh;
`;

const ContentSpacer = styled.div`
	margin-top: 6vh;
`;

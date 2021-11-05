import styled from "styled-components";

import { useFetch } from "../hooks/useFetch";

const Git = (props) => {
	const { result, isLoading } = useFetch("https://api.github.com/users/maxjander/repos", []);

	// const handleClick = (props) => {

	// };

	return (
		<Wrapper>
			{!isLoading && (
				<ul>
					<h3>My Public GitHub Repos</h3>
					{result.map((item) => (
						<li key={item.id} title={item.description}>
							<a href={item.html_url}>
								<p>{item.full_name}</p>
								{item.description && <p className="desc"> {item.description} </p>}
							</a>
						</li>
					))}
				</ul>
			)}
		</Wrapper>
	);
};

export default Git;

const Wrapper = styled.div`
	padding: 20px;

	.desc {
		font-size: calc(0.3rem + 1vmin);
	}
`;

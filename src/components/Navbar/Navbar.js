import React from 'react';

import styled from 'styled-components';

export const Navbar = () => {
	const Container = styled.div`
		height: 60px;
		background-color: tomato;
	`;

	return (
		<Container>
			<h2>This is Navbar</h2>
		</Container>
	);
};

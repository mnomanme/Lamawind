import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

export const Navbar = () => {
	const Container = styled.div`
		height: 60px;
	`;

	const Wrapper = styled.div`
		padding: 10px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;

	const Left = styled.div`
		flex: 1;
		display: flex;
		align-items: center;
	`;

	const Center = styled.div`
		flex: 1;
		text-align: center;
	`;

	const Right = styled.div`
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	`;

	const Language = styled.div`
		font-size: 14px;
		cursor: pointer;
	`;

	const SearchContainer = styled.div`
		border: 0.5px solid lightgray;
		display: flex;
		align-items: center;
		margin-left: 25px;
		padding: 5px;
	`;

	const Input = styled.input`
		border: none;
	`;

	const Logo = styled.h1`
		font-weight: bold;
	`;

	const MenuItem = styled.div`
		font-size: 14px;
		cursor: pointer;
		margin-left: 25px;
	`;

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: 'gray', fontSize: '16px' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>LAMAWIND.</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

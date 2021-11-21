import styled from 'styled-components';
import { Announcement } from '../../components/Announcement/Announcement';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
	color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Info = styled.div`
	flex: 3;
`;

const Summary = styled.div`
	flex: 1;
	background-color: tomato;
`;

const Product = styled.div``;

const ProductDetail = styled.div``;

const PriceDetail = styled.div``;

const Image = styled.img``;

export const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>Your Bag</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Whishlist(0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image />
							</ProductDetail>
							<PriceDetail></PriceDetail>
						</Product>
					</Info>
					<Summary>Summary</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

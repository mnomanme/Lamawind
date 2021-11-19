import { Announcement } from '../../components/Announcement/Announcement';
import { Categories } from '../../components/Categories/Categories';
import { Navbar } from '../../components/Navbar/Navbar';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { Products } from '../../components/Products/Products';
import { Slider } from '../../components/Slider/Slider';

export const Home = () => {
	return (
		<>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<NewsLetter />
		</>
	);
};

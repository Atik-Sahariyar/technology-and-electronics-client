import Footer from "../Footer/Footer";
import Slider from "../Home/Slider";
import Brands from "./Brands";
import CustomerReviews from "./CustomerReviews";
import FeaturedProducts from "./FeaturedProducts";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Brands></Brands>
            <FeaturedProducts></FeaturedProducts>
            <CustomerReviews></CustomerReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
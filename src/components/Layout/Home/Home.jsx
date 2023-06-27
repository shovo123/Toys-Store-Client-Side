import useTitle from "../../../Hooks/useTitle";
import About from "./About";
import Banner from "./Banner";
import CategoryData from "./CategoryData";
import Gallery from "./Gallery";
import Services from "./Services";


const Home = () => {
    useTitle('Home')
    return (
        <div>
           <Banner></Banner>
           <Gallery></Gallery>
           <CategoryData></CategoryData>
           <Services></Services>
           <About></About>
        </div>
    );
};

export default Home;
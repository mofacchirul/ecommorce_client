import About from "./About/About";
import Banner from "./Banner/Banner";
import Banner_slid from "./Banner_Slid/Banner_Slid";
import Popularkids from "./Popular_kids/Popular_kids";
import Popular_men from "./Popular_men/Popular_men";
import PopularWomen from "./Popular_women/Popular_women";
import Reviws from "./Reviw/Reviws/Reviws";


const Shop = () => {
    return (
        <div>
            <Banner_slid></Banner_slid>
           
            <PopularWomen></PopularWomen>
            <Banner></Banner>
            <Popular_men></Popular_men>
            <About></About>
            <Popularkids></Popularkids>
            <Reviws></Reviws>
        </div>
    );
};

export default Shop;
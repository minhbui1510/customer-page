import CustomNavbarLandingPage from "../../../navbar.jsx";
import {useNavigate} from "react-router-dom";
import products from "../../../../services/products.jsx";

const ProductTemplate = () => {
    const navigate = useNavigate();
    const clickHidden = () => {
        navigate(`/more-service/${1}`);
    }
    return (
        <>
            <div className="product-container">
                <CustomNavbarLandingPage/>
                <div className="w-full text-center">
                    <p className=" main-title animate__animated animate__zoomIn">
                        Dịch vụ của chúng tôi
                    </p>
                </div>
              <div id="preProduct"
                      className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-6 w-full justify-center">
                    {
                        products.map(item => (
                            <div className="items-center flex flex-col p-4" onClick={clickHidden}>
                                <div className="square box-items">
                                    <img src={`/logo.png`} alt=""/>
                                </div>
                                <div
                                    className="text-center text-2xl font-bold box-items-title animate__animated animate__fadeInUp">
                                    {item.name}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
const itemsData = [
    {
        image: 'ao_da.png',
        title: 'Vệ sinh áo da'
    },
    {
        image: 'giay_da.png',
        title: 'Vệ sinh giày da'
    },
    {
        image: 'giay_sneaker.png',
        title: 'Vệ sinh giày sneaker'
    },
    {
        image: 'tui_da.png',
        title: 'Vệ sinh túi da'
    },
    {
        image: 'vi_da.png',
        title: 'Vệ sinh ví'
    }
]
export default ProductTemplate;

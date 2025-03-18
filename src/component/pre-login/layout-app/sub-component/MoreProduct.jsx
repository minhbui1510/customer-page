import CustomNavbarLandingPage from "../../../navbar.jsx";
import {Carousel} from "primereact/carousel";
import {useEffect, useState} from "react";
import products from "../../../../services/products.jsx";
import {useParams} from "react-router-dom";

const MoreProduct = () => {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '425px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const params = useParams();
    const [detailItems, setDetailItem] = useState({id: '', name: '', price: '', description: '' });
    useEffect(() => {
        setDetailItem(products.find(item => item.id === Number(params.id)));
    }, []);
    const changeItems = (item) => {
        setDetailItem(item);
    }
    const itemTemplate = (item) => {
        return (
            <>
                <div className="items-center flex flex-col p-4" onClick={() => changeItems(item)}>
                    <div className="square box-items">
                        <img src={`/logo.png`} alt=""/>
                    </div>
                    <div
                        className="text-center text-2xl font-bold box-items-title">
                        {item.name}
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="product-container">
                <CustomNavbarLandingPage/>
                <div className="w-full text-center p-3">
                    <p className=" main-title animate__animated animate__zoomIn">
                        Dịch vụ của chúng tôi
                    </p>
                </div>
                <div className="w-full p-3 justify-center animate__animated animate__fadeInUp">
                    <Carousel value={products} numVisible={3} numScroll={3} autoplayInterval={2000}
                              itemTemplate={itemTemplate} circular responsiveOptions={responsiveOptions}/>
                </div>
                <div className="w-full p-3 md:flex info-product">
                    <div className="w-full p-2 md:w-4/12">
                        <p className="text-2xl main-title">
                            {detailItems?.name}
                        </p>
                        <span className="text-xl font-bold">
                            {detailItems?.price}
                        </span>
                        <div className="">
                            {detailItems?.description}
                        </div>
                    </div>
                    <div className="w-full md:w-8/12">
                        <div className="grid grid-cols-2">
                            <img src="/logo.png" alt=""/>
                            <img src="/logo.png" alt=""/>
                            <img src="/logo.png" alt=""/>
                            <img src="/logo.png" alt=""/>
                        </div>
                    </div>
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

export default MoreProduct;

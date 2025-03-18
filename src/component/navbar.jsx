import {Link, useLocation} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";

const CustomNavbarLandingPage = () => {
    const location = useLocation();
    return (
        <>
            <div className="mt-2 w-full flex justify-center animate__animated animate__backInUp">
                <Link to="/">
                    <div className={"items" + (location.pathname === '/' ? ' current-item' : '')}>
                        Trang chủ
                    </div>
                </Link>
                <Link to="/service">
                    <div className={"items" + (location.pathname === '/service' ? ' current-item' : '')}>
                        Dịch vụ
                    </div>
                </Link>
                <Link to="/contact">
                    <div className={"items" + (location.pathname === '/contact' ? ' current-item' : '')}>
                        Liên hệ
                    </div>
                </Link>
                {/*<Link to="/about">*/}
                {/*    <div className={"items" + (location.pathname === '/about' ? ' current-item' : '')}>*/}
                {/*        Về chúng tôi*/}
                {/*    </div>*/}
                {/*</Link>*/}
                <Link to="/login" className=" flex items-center">

                <div className="items">
                        <FaUserAlt/>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default CustomNavbarLandingPage;


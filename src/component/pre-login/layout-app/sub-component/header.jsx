import {FaFacebook, FaYoutube} from "react-icons/fa";
import {FaSquareInstagram} from "react-icons/fa6";
import {AiFillTikTok} from "react-icons/ai";

const HeaderApp = () => {
    return (
        <>
            <div className="flex flex-col p-5">
                <div className="flex justify-center">
                    <img src="/logo.png" alt="" height={100} width={100}
                         className="animate__animated animate__bounceIn"/>
                </div>
                <div className="mt-2">
                    <p className="font-bold text-2xl md:text-1xl text-center animate__animated animate__bounce animate__faster">Theo
                        dõi
                        chúng mình tại</p>
                    <p className="flex justify-around">
                        <FaFacebook className="text-2xl scale"/>
                        <FaSquareInstagram className="text-2xl scale"/>
                        <FaYoutube className="text-2xl scale"/>
                        <AiFillTikTok className="text-2xl scale"/>
                    </p>
                </div>
                <div className="animate__zoomIn animate__faster animate__animated">
                    <span className="logo-title flex justify-center">An Nhung Spa</span>
                    <div className="flex justify-center ">
                        <p className="sub-title">
                            SHOE & BAGS CARE
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}
export default HeaderApp;

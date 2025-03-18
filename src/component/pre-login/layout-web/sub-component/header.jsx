import {FaFacebook, FaYoutube,} from "react-icons/fa";
import {FaSquareInstagram} from "react-icons/fa6";
import {AiFillTikTok} from "react-icons/ai";

const Header = () => {
    return (
        <>
            <div className="">
                <div className="md:flex justify-between h-[100px] w-full">
                    <div>
                        <p className="font-bold text-2xl text-center animate__animated animate__bounce animate__faster">Theo dõi
                            chúng mình tại</p>
                        <p className="flex justify-around">
                            <FaFacebook className="text-2xl scale"/>
                            <FaSquareInstagram className="text-2xl scale"/>
                            <FaYoutube className="text-2xl scale"/>
                            <AiFillTikTok className="text-2xl scale"/>
                        </p>
                    </div>
                    <div className="animate__zoomIn animate__faster animate__animated">
                        <span className="logo-title">An Nhung Spa</span>
                        <div className="flex justify-center ">
                            <p className="sub-title">
                                SHOE & BAGS CARE
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="/logo.png" alt="" height={100} width={100} className="animate__animated animate__bounceIn"/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-6/12">
                        <img src="/pic.png" alt="" className="animate__animated animate__bounceIn"/>
                    </div>
                    <div className="w-6/12 flex items-center">
                       <div className="w-full">
                           <p className=" main-title animate__animated animate__lightSpeedInRight">
                            Dịch vụ chăm sóc
                        </p>
                        <p className="main-title animate__animated text-right animate__lightSpeedInLeft">
                            đồ hiệu Hạ Long
                        </p>
                        <p className="text-right font-bold text-base animate__animated animate__jackInTheBox">
                            Làm mới những điều đã cũ
                        </p>
                       </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header;
